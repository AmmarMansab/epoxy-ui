'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Modal,
  IconButton,
  Typography,
  Stack,
  Avatar,
  Tooltip,
} from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import type { LocalizedProject } from '@/src/lib/api/projects';

interface GalleryModalProps {
  project: LocalizedProject;
  open: boolean;
  onClose: () => void;
}

export function GalleryModal({ project, open, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset to first image when project changes
  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
      setZoom(1);
      setIsFullscreen(false);
      setIsPlaying(false);
    }
  }, [open]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, handleNext, handlePrevious, onClose]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || !open) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, open, handleNext]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const currentImage = project.images[currentIndex];

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        p: 0,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          bgcolor: 'grey.900',
          display: 'flex',
          flexDirection: 'column',
          outline: 'none',
        }}
      >
        {/* Top Bar */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 64,
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            zIndex: 1000,
          }}
        >
          {/* Left Side - Project Title */}
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 500,
              fontSize: '1rem',
            }}
          >
            {project.title}
          </Typography>

          {/* Right Side - Controls */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="Search">
              <IconButton
                size="small"
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                <SearchIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'primary.main',
                fontSize: '0.875rem',
              }}
            >
              {project.title.charAt(0).toUpperCase()}
            </Avatar>

            <Tooltip title="Zoom In">
              <IconButton
                size="small"
                onClick={handleZoomIn}
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                <ZoomInIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Zoom Out">
              <IconButton
                size="small"
                onClick={handleZoomOut}
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                <ZoomOutIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title={isPlaying ? 'Pause' : 'Play'}>
              <IconButton
                size="small"
                onClick={handlePlayPause}
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                <PlayArrowIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
              <IconButton
                size="small"
                onClick={handleFullscreen}
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                {isFullscreen ? (
                  <FullscreenExitIcon fontSize="small" />
                ) : (
                  <FullscreenIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>

            <Typography
              variant="body2"
              sx={{
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 500,
                px: 1,
              }}
            >
              {currentIndex + 1}/{project.images.length}
            </Typography>

            <IconButton
              size="small"
              onClick={onClose}
              sx={{
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        {/* Main Image Area */}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            mt: 8,
            mb: { xs: 12, md: 16 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: `scale(${zoom})`,
              transition: 'transform 0.3s ease',
            }}
          >
            <Image
              src={currentImage}
              alt={`${project.title} - Image ${currentIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: 24,
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                  zIndex: 100,
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 24,
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                  zIndex: 100,
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
        </Box>

        {/* Thumbnail Carousel */}
        {project.images.length > 1 && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: 100, md: 120 },
              bgcolor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 2,
              py: 2,
              overflowX: 'auto',
              zIndex: 1000,
              '&::-webkit-scrollbar': {
                height: 4,
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: 2,
              },
            }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                minWidth: 'fit-content',
              }}
            >
              {project.images.map((image, index) => (
                <Box
                  key={`${project.id}-thumbnail-${image}-${index}`}
                  onClick={() => handleThumbnailClick(index)}
                  sx={{
                    position: 'relative',
                    width: { xs: 70, md: 90 },
                    height: { xs: 70, md: 90 },
                    borderRadius: 1.5,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: currentIndex === index ? 3 : 2,
                    borderColor: currentIndex === index ? 'primary.main' : 'rgba(255, 255, 255, 0.3)',
                    opacity: currentIndex === index ? 1 : 0.6,
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                    '&:hover': {
                      opacity: 1,
                      borderColor: currentIndex === index ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
                    },
                  }}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="90px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Modal>
  );
}

