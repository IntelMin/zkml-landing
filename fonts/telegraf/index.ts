import localFont from 'next/font/local';

export const telegraf = localFont({
    src: [
        {
            path: './PPTelegraf-UltraBold.otf',
            weight: '800',
            style: 'ultraBold',
        },
        {
            path: './PPTelegraf-Regular.otf',
            weight: '500',
            style: 'medium',
        },
        {
            path: './PPTelegraf-UltraLight.otf',
            weight: '400',
            style: 'normal',
        },
    ],
});