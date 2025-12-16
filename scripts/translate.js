/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const translate = require("translate").default;
const args = process.argv.slice(2);

// Configure translate package
translate.engine = "google";
translate.key = process.env.GOOGLE_TRANSLATE_API_KEY; // Optional: set your API key

// Language code mapping from locale codes to ISO 639-1 codes
const languageCodeMap = {
  'ar-SA': 'ar',
  'en-US': 'en',
  'fr-FR': 'fr',
  'es-ES': 'es',
  'de-DE': 'de',
  'it-IT': 'it',
  'pt-PT': 'pt',
  'ru-RU': 'ru',
  'ja-JP': 'ja',
  'ko-KR': 'ko',
  'zh-CN': 'zh',
  'hi-IN': 'hi',
  // Support for simple locale codes
  'ar': 'ar',
  'en': 'en',
};

// funcs
const getArg = (index, def = undefined) => {
  try {
    if (!args[index] && !def) throw new Error("Argument not found");
    return args[index] || def;
  } catch {
    console.error(`Missing argument ${index}`);
    process.exit(1);
  }
};

// Get all JSON files in a locale directory
const getJsonFiles = (dir) => {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && file.endsWith(".json")) {
      files.push({
        path: filePath,
        name: file,
      });
    }
  });
  return files;
};

// Translate an object recursively
const translateFile = async (obj, locale) => {
  const translatedObj = {};
  
  const translateRecursively = async (source, target) => {
    for (const key in source) {
      const value = source[key];
      
      if (typeof value === "string") {
        // Only translate if it's not empty and not a placeholder/technical value
        if (value.trim() && !value.startsWith("{{") && !value.startsWith("${")) {
          try {
            // Add a small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 100));
            
            const targetLang = languageCodeMap[locale.lang] || locale.lang || "ar";
            const translated = await translate(value, {
              to: targetLang,
              from: "en"
            });
            target[key] = translated;
          } catch (error) {
            console.warn(`    Warning: Failed to translate "${value}": ${error.message}`);
            target[key] = value; // Keep original if translation fails
          }
        } else {
          target[key] = value; // Keep original for placeholders/technical values
        }
      } else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        target[key] = {};
        await translateRecursively(value, target[key]);
      } else {
        target[key] = value; // Keep non-string values as-is (including arrays)
      }
    }
  };
  
  await translateRecursively(obj, translatedObj);
  return translatedObj;
};

// vars
const cwd = process.cwd();
const localePath = path.join(cwd, getArg(0, "./src/locales/static"));
const sourceLocale = getArg(1, "en");
const targetLocales = getArg(2, "ar").split(",");

// main funcs
async function main() {
  // info
  console.log("==============================================");
  console.log(`Target Locales Path: ${localePath}`);
  console.log(`Source Locale: ${sourceLocale}`);
  console.log(`Target Locales: ${targetLocales}`);

  // Get source locale directory
  const sourceLocalePath = path.join(localePath, sourceLocale);
  if (!fs.existsSync(sourceLocalePath)) {
    console.error(`Source locale directory not found: ${sourceLocalePath}`);
    console.error(`Please create the directory and add your JSON files there.`);
    process.exit(1);
  }

  // Get all JSON files in source locale
  const sourceFiles = getJsonFiles(sourceLocalePath);
  console.log(`Found ${sourceFiles.length} JSON files in source locale:`, sourceFiles.map(f => f.name));

  if (sourceFiles.length === 0) {
    console.error(`No JSON files found in ${sourceLocalePath}`);
    console.error(`Please add JSON files (e.g., nav.json, footer.json) to translate.`);
    process.exit(1);
  }

  // translating
  console.log("==============================================");
  console.log(`Starting translate with engine "${translate.engine}"...`);
  
  if (!process.env.GOOGLE_TRANSLATE_API_KEY) {
    console.warn("⚠️  Warning: GOOGLE_TRANSLATE_API_KEY not set. Using free translation (may have rate limits).");
  }
  
  for (const targetLocale of targetLocales) {
    console.log(`\nTranslating to ${targetLocale}...`);
    
    // Create target locale directory if it doesn't exist
    const targetLocalePath = path.join(localePath, targetLocale);
    if (!fs.existsSync(targetLocalePath)) {
      fs.mkdirSync(targetLocalePath, { recursive: true });
      console.log(`Created directory: ${targetLocalePath}`);
    }

    // Translate each JSON file
    for (const sourceFile of sourceFiles) {
      console.log(`  Translating ${sourceFile.name}...`);
      try {
        // Load source file
        const sourceContent = JSON.parse(fs.readFileSync(sourceFile.path, "utf8"));

        // Translate
        const translatedContent = await translateFile(sourceContent, { lang: targetLocale });

        // Save to target file
        const targetFilePath = path.join(targetLocalePath, sourceFile.name);
        fs.writeFileSync(targetFilePath, JSON.stringify(translatedContent, null, 2));
        
        console.log(`    ✓ Saved to ${targetFilePath}`);
      } catch (e) {
        console.error(`    ✗ Error translating ${sourceFile.name}:`, e.message);
      }
    }
  }
  
  console.log("\n==============================================");
  console.log("Translation completed!");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

