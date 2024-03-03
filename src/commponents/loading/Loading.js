import React from 'react'
import './LoadingStyle.css'
export default function Loading() {
  return (<>


<div id='Loading' className="loader ">
  <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="50%" y="50%" width="24px" height="60px" viewBox="0 0 24 30" style={{enableBackground: 'new 0 0 50 50'}} xmlSpace="preserve">
    <rect x={0} y={0} width={2} height={50} fill="#e3d704">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin={0} dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x={10} y={0} width={2} height={40} fill="#e3d704">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x={20} y={0} width={2} height={50} fill="#e3d704">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x={30} y={0} width={2} height={50} fill="#e3d704">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.6s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x={40} y={0} width={2} height={50} fill="#e3d704">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.8s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x={50} y={0} width={2} height={50} fill="#e3d704">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="1s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>
</div>


 </> )
}
