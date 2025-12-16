'use client';

import Image from 'next/image';
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';

interface AvatarProps extends Omit<MuiAvatarProps, 'src'> {
  src?: string;
  alt: string;
}

export function Avatar({ src, alt, sx, ...props }: AvatarProps) {
  return (
    <MuiAvatar
      {...props}
      sx={{
        ...sx,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      )}
    </MuiAvatar>
  );
}

