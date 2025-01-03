// src/components/ArcadeEmbed.js
import React from 'react';

export function ArcadeEmbed() {
  return (
    <div style={{ position: 'relative', paddingBottom: 'calc(62.33333333333333% + 41px)', height: 0, width: '100%' }}>
      <iframe
        src="https://demo.arcade.software/XLVYOvGlSEu48L0dHaSw?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
        title="Demo: Index Overview"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      />
    </div>
  );
}