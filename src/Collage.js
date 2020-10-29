import React from 'react'

export const Collage = (props) => {
    const { large, original, horizontal, square, width, height } = props
    return (
      <svg width={width} height={height} viewBox='0 0 492 503' fill='none' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
        <g filter='url(#filter0_d)'>
          <rect x='4' width='323' height='231' fill='url(#pattern01)' />
        </g>
  
        <g filter='url(#filter12)'>
          <rect x='8' y='244' width='379' height='95' fill='url(#pattern12)' />
        </g>
  
        <g filter='url(#filter2_d)'>
          <rect x='270' y='329' width='166' height='166' fill='url(#pattern2)' />
        </g>
  
        <g filter='url("#filter3_d")'>
          <rect x='337' y='23' width='151' height='269' fill='url(#pattern4)' />
        </g>
  
        <text x='163' y='220' fill='white' textAnchor='middle'>Main</text>
        <text x='350' y='490' fill='white' textAnchor='middle'>{square.title}</text>
        <text x='412' y='280' fill='white' textAnchor='middle'>{large.title}</text>
        <text x='163' y='320' fill='white' textAnchor='middle'>{horizontal.title}</text>
        <defs>
          <filter id='filter0_d' x='0' y='0' width='331' height='239' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='2' />
            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
          </filter>
          <pattern id='pattern01' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#image6' transform='translate(-0.136371) scale(0.00108688 0.00151976)' />
          </pattern>
          <filter id='filter12' x='4' y='244' width='387' height='103' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='2' />
            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
          </filter>
          <pattern id='pattern12' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#image8' transform='translate(0 -0.164344) scale(0.000853971 0.00340689)' />
          </pattern>
          <filter id='filter2_d' x='266' y='329' width='174' height='174' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='2' />
            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
          </filter>
          <pattern id='pattern2' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#image2' transform='scale(0.00123305)' />
          </pattern>
          <filter id='filter3_d' x='333' y='23' width='159' height='277' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='2' />
            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
          </filter>
          <pattern id='pattern4' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#image4' transform='translate(-0.000828835) scale(0.00219662 0.00123305)' />
          </pattern>
          <pattern id='pattern5' patternContentUnits='objectBoundingBox' width='1' height='1'>
            <use xlinkHref='#image5' transform='translate(-0.000678363) scale(0.00228099 0.00128041)' />
          </pattern>
          <image
            id='image6'
            width='1171'
            height='658'
            xlinkHref={original}
          />
          <image
            id='image8'
            width='1171'
            height='390'
            xlinkHref={horizontal.url}
          />
          <image
            id='image2'
            width='811'
            height='811'
            xlinkHref={square.url}
          />
          <image
            id='image4'
            width='456'
            height='811'
            xlinkHref={large.url}
          />
        </defs>
      </svg>)
  }