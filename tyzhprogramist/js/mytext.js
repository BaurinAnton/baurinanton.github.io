tl = new TimelineMax({ yoyo: true, repeat: 0 });
          tl.from('body > main > section:nth-child(1) > div > div > div', 2, { autoAlpha: 0, y: 150, ease: Power2.easeOut }, 0.6);