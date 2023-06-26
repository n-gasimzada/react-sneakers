import React from 'react'
import ContentLoader from "react-content-loader"


function LoadingSneakers() {
  return (
    <ContentLoader
    speed={2}
    width={150}
    height={265}
    viewBox="0 0 150 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="110" y="148" rx="0" ry="0" width="36" height="0" /> 
    <rect x="168" y="198" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="0" rx="0" ry="0" width="150" height="97" /> 
    <rect x="0" y="116" rx="3" ry="3" width="150" height="15" /> 
    <rect x="0" y="136" rx="3" ry="3" width="93" height="15" /> 
    <rect x="0" y="174" rx="10" ry="10" width="80" height="24" /> 
    <rect x="117" y="166" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
  )
}

export default LoadingSneakers