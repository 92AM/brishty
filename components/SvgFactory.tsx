import React from 'react';

export const getMainLocationPinSvgIcon = () => {
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n' +
        '    <path d="M256 0C156.698 0 76 80.7 76 180c0 33.6 9.302 66.301 27.001 94.501l140.797 230.414c2.402 3.9 6.002 6.301 10.203 6.901 5.698.899 12.001-1.5 15.3-7.2l141.2-232.516C427.299 244.501 436 212.401 436 180 436 80.7 355.302 0 256 0zm0 270c-50.398 0-90-40.8-90-90 0-49.501 40.499-90 90-90s90 40.499 90 90c0 48.9-39.001 90-90 90z" fill="#1f2a37"/>\n' +
        '    <path d="M256 0v90c49.501 0 90 40.499 90 90 0 48.9-39.001 90-90 90v241.991c5.119.119 10.383-2.335 13.3-7.375L410.5 272.1c16.799-27.599 25.5-59.699 25.5-92.1C436 80.7 355.302 0 256 0z" fill="#1f2a37"/>\n' +
        '</svg>'
    );
};

export const getNearbyLocationPinSvgIcon = () => {
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n' +
        '  <path d="M256 103.278c-39.429 0-71.505 32.077-71.505 71.505 0 39.429 32.077 71.505 71.505 71.505s71.505-32.077 71.505-71.505-32.076-71.505-71.505-71.505z" fill="#1f2a37"/>\n' +
        '  <path d="M256 0C158.107 0 78.465 79.642 78.465 177.535c0 40.042 28.089 106.034 83.486 196.143 40.502 65.88 81.577 121.48 81.987 122.033L256 512l12.062-16.289c.41-.553 41.485-56.153 81.987-122.033 55.397-90.109 83.486-156.101 83.486-196.143C433.535 79.642 353.893 0 256 0zm0 276.306c-55.98 0-101.522-45.543-101.522-101.522 0-55.98 45.543-101.522 101.522-101.522s101.522 45.543 101.522 101.522c0 55.979-45.542 101.522-101.522 101.522z" fill="#1f2a37"/>\n' +
        '</svg>\n'
    );
};

interface SvgProps {
    viewBox: string;
    className: string;
}

interface BurgerMenuSvgProps extends SvgProps {
    isBurgerMenuOpen: boolean;
}

export const CloseSvg = ({ viewBox: viewBox, className: className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
            <path d="M.324 1.909C-.105 1.48-.105.766.324.322c.444-.429 1.143-.429 1.587 0l9.523 9.539L20.973.322c.429-.429 1.143-.429 1.571 0 .444.444.444 1.159 0 1.587l-9.523 9.524 9.523 9.539c.444.429.444 1.143 0 1.587-.429.429-1.143.429-1.571 0l-9.539-9.539-9.523 9.539c-.444.429-1.143.429-1.587 0-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z" />
        </svg>
    );
};

export const LeftArrowSvg = ({ viewBox: viewBox, className: className }: SvgProps) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox={viewBox}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
    );
};

export const SearchIconSvg = ({ viewBox: viewBox, className: className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
    );
};

export const BurgerMenuSvg = ({
    viewBox: viewBox,
    className: className,
    isBurgerMenuOpen: isBurgerMenuOpen,
}: BurgerMenuSvgProps) => {
    return (
        <svg className={className} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            {!isBurgerMenuOpen && <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />}
            {isBurgerMenuOpen && (
                <path d="M.324 1.909C-.105 1.48-.105.766.324.322c.444-.429 1.143-.429 1.587 0l9.523 9.539L20.973.322c.429-.429 1.143-.429 1.571 0 .444.444.444 1.159 0 1.587l-9.523 9.524 9.523 9.539c.444.429.444 1.143 0 1.587-.429.429-1.143.429-1.571 0l-9.539-9.539-9.523 9.539c-.444.429-1.143.429-1.587 0-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z" />
            )}
        </svg>
    );
};

export const RightChevronSvg = ({ viewBox: viewBox, className: className }: SvgProps) => {
    return (
        <svg className={className} fill="none" viewBox={viewBox} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );
};

export const HomeSvg = ({ viewBox: viewBox, className: className }: SvgProps) => {
    return (
        <svg className={className} fill="none" viewBox={viewBox} stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1
                                  1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
        </svg>
    );
};

export const AboutSvg = ({ viewBox: viewBox, className: className }: SvgProps) => {
    return (
        <svg className={className} fill="#000000" viewBox={viewBox}>
            <path d="M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 4.0097656 5 L 20 5 L 20 17 L 5.171875 17 L 4.0039062 18.167969 L 4.0097656 5 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z" />
        </svg>
    );
};

export const GbSvg = ({ viewBox: viewBox, className: className }: SvgProps) => {
    return (
        <svg className={className} width="30" height="30" fill="1" viewBox={viewBox}>
            <path
                d="M2335 5109c-735-71-1413-528-1763-1189-345-650-346-1437-5-2090 289-554 804-967 1415-1135l56-15 208-321c177-273 213-323 245-340 48-24 90-24 138 0 32 17 68 67 245 340 114 177 209 321 211 321 16 0 228 69 306 100 494 197 915 577 1162 1050 113 215 194 465 234 720 26 170 24 501-5 670-42 247-98 423-207 645-216 441-583 807-1030 1025-374 184-791 259-1210 219zm416-299c786-80 1446-623 1675-1378 61-201 77-318 78-557 0-224-10-310-61-504-105-410-370-801-717-1060-216-161-424-261-691-332-60-16-121-37-135-47s-95-127-180-260-157-241-160-241-75 108-160 241-166 249-180 260c-14 10-81 33-150 52-354 97-634 258-885 510-691 693-766 1768-180 2551 78 104 268 295 372 373 399 301 888 441 1374 392z"
                transform="matrix(.1 0 0 -.1 0 512)"
            />
            <path
                d="M2415 4514c-418-49-754-208-1030-489-242-246-395-549-457-905-16-97-16-403 0-500 62-357 215-659 457-904 645-654 1684-661 2335-16 446 443 601 1092 404 1690-201 609-748 1050-1386 1119-91 10-255 12-323 5zm264-300l31-6v-535c0-515 1-535 20-573 13-26 34-47 60-60 38-19 58-20 573-20h535l6-31c8-41 8-197 0-238l-6-31H2828l-40-22c-24-14-48-38-59-60-18-35-19-67-19-571v-534l-31-7c-41-8-197-8-238 0l-31 6v535c0 515-1 535-20 573-13 26-34 47-60 60-38 19-58 20-573 20h-534l-7 31c-8 41-8 197 0 238l7 31h534c527 0 536 0 573 21 21 12 47 38 59 59 21 37 21 46 21 573v536l23 4c36 7 212 8 246 1zm-569-376v-303l-195 195c-107 107-191 197-187 200 35 30 98 73 150 104 57 35 207 105 225 106 4 0 7-136 7-302zm1035 247c81-39 210-118 242-149 10-9-30-54-182-206l-195-195v606l23-6c12-4 63-27 112-50zm-1551-763c-164-1-299 0-301 2-14 14 100 235 175 339l35 49 194-194 193-193-296-3zm2091 293c44-66 125-224 140-272l6-23h-606l195 195c152 152 197 192 206 182 7-6 33-43 59-82zM1700 2225c-152-152-197-192-206-182-48 50-175 278-199 355l-6 22h606l-195-195zm2124 173c-19-62-80-180-140-270l-66-101-194 194c-107 107-194 195-194 196 0 2 135 3 301 3h300l-7-22zm-1718-795c-14-14-242 104-339 176l-47 36 192 192 193 193 3-296c1-164 0-299-2-301zm1103 403l194-194-101-66c-90-60-208-121-269-140l-23-7v300c0 166 1 301 3 301 1 0 89-87 196-194z"
                transform="matrix(.1 0 0 -.1 0 512)"
            />
        </svg>
    );
};

export const WorldSvg = ({ viewBox: viewBox, className: className }: SvgProps) => {
    return (
        <svg className={className} fill="none" viewBox={viewBox} stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0
                                  0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21
                                  12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
};
