<template>
  <section>
    <div class="home-swiper-text">
      <h1>Academy Advantages</h1>
      <p>Monglish Academy Features</p>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--one" v-for="(advantage, index) in advantages" :key="index">
          <div class="swiper-slide-content">
            <div v-html="advantage.svg" class="swiper-slide-icon"></div>
            <div class="swiper-text">
               <h2>{{ advantage.title }}</h2>
               <p>{{ advantage.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

export default {
  data() {
    return {
    advantages: [
    {
      "title": "Effectiveness",
      "content": "We offer the latest and most effective language teaching methods.",
      "svg": `<svg fill="#fff" width="24px" height="24px" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: none; } </style> </defs> <path d="M18,23H16V21a3.0033,3.0033,0,0,0-3-3H9a3.0033,3.0033,0,0,0-3,3v2H4V21a5.0059,5.0059,0,0,1,5-5h4a5.0059,5.0059,0,0,1,5,5Z" transform="translate(0 0)"></path> <path d="M11,6A3,3,0,1,1,8,9a3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,11,4Z" transform="translate(0 0)"></path> <rect x="2" y="26.0001" width="28" height="2"></rect> <polygon points="22 4 22 6 26.586 6 20 12.586 21.414 14 28 7.414 28 12 30 12 30 4 22 4"></polygon> <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect> </g></svg>`
    },
    {
      "title": "Foundation",
      "content": "Since its establishment, Monglish Academy has trained over a million students in English.",
      "svg": `<svg fill="#fff" width="24px" height="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.061 512.061" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(0 -1)"> <g> <g> <path d="M413.274,316.794H253.493c2.053-4.045,4.388-8.937,6.819-14.598c0.345-0.259,0.681-0.538,0.991-0.857 c3.772-3.849,8.004-9.225,12.911-15.454c9.903-12.591,22.134-28.112,35.647-37.388c42.666-0.413,74.277-10.849,93.977-31.05 c24.013-24.636,23.211-56.602,22.903-68.634l-0.051-2.688c0-4.71-3.814-8.533-8.533-8.533l-1.707-0.026 c-49.331-1.084-76.493,15.155-90.675,29.022c-17.084,16.695-26.146,39.849-27,68.843c-8.746,6.263-16.684,14.308-23.826,22.532 c10.075-42.535,12.179-99.22-18.912-156.914c-0.268-31.126-9.331-55.649-26.982-72.863 c-13.312-12.979-38.502-28.075-82.56-27.145l-1.365,0.026c-4.719,0-8.533,3.823-8.533,8.533l-0.034,1.929 c-0.247,11.324-1.007,45.756,24.303,71.305c18.085,18.243,45.376,27.686,81.126,28.142c49.741,94.574,3.377,186.18-7.838,205.819 H98.778c-12.1,0-21.948,9.847-21.948,21.956v7.287c0,12.109,9.847,21.956,21.948,21.956h14.298l51.152,44.758 c2.236,1.86,8.934,6.443,20.002,6.443c3.635,0,7.723-2.816,12.041-5.794c3.439-2.381,6.997-4.83,11.127-6.528 c15.863-6.554,28.527-7.791,42.598,6.289l33.399,35.422c2.842,3.379,8.073,4.992,14.362,4.736 c8.431-0.358,15.394-4.753,19.746-8.38l12.971-10.812c9.02-7.518,21.837-8.516,31.915-2.475l16.521,9.566l6.101,3.635 l27.128-76.861h1.135c12.1,0,21.956-9.847,21.956-21.956v-7.287C435.231,326.641,425.375,316.794,413.274,316.794z M337.706,178.79c11.255-11,32.777-23.817,72.064-24.209c0,12.664-1.775,34.15-18.15,50.953 c-13.605,13.95-34.864,22.32-63.337,24.983c11.218-10.599,25.048-21.999,33.278-25.253c4.386-1.732,6.536-6.69,4.804-11.076 c-1.732-4.386-6.724-6.502-11.068-4.796c-10.607,4.196-25.447,16.338-37.332,27.445 C321.131,201.297,327.729,188.543,337.706,178.79z M153.578,18.073c33.997,0.58,53.248,12.271,63.556,22.323 c9.446,9.215,15.848,21.295,19.172,36.057c-10.835-10.932-22.496-19.999-35.634-27.771c-4.045-2.389-9.284-1.041-11.682,3.004 c-2.406,4.053-1.058,9.293,2.995,11.691c13.69,8.092,25.642,17.789,36.753,29.872c-24.435-2.212-43.147-9.719-55.747-22.432 C156.104,53.777,153.766,30.754,153.578,18.073z M418.164,346.038c0,2.697-2.193,4.89-4.89,4.89H98.778 c-2.688,0-4.881-2.193-4.881-4.89v-7.287c0-2.697,2.193-4.89,4.881-4.89h314.496c2.697,0,4.89,2.193,4.89,4.89V346.038z"></path> <path d="M409.628,495.994h-42.67l12.195-34.551l-25.429-15.087c-3.977-2.381-8.875-1.997-12.314,0.879l-12.979,10.812 c-9.148,7.629-19.507,11.887-29.961,12.322c-11.75,0.546-21.888-3.319-27.836-10.47l-32.879-34.85 c-6.673-6.665-10.65-7.842-23.851-2.406c-2.449,1.007-5.111,2.85-7.945,4.804c-5.99,4.13-12.774,8.815-21.726,8.815 c-16.648,0-27.273-7.347-31.061-10.513l-31.275-27.162l-1.707-1.502l34.91,98.909H93.895c-4.719,0-8.533,3.823-8.533,8.533 s3.814,8.533,8.533,8.533h67.231l0,0.001h199.808l0-0.001h48.693c4.719,0,8.533-3.823,8.533-8.533 S414.347,495.994,409.628,495.994z"></path> </g> </g> </g> </g></svg>`
    },
    {
      "title": "Exclusive",
      "content": "A unique and exclusive approach to teaching language. Which is based on the best internationally recognized system (CEFR).",
      "svg": `<svg fill="#fff" width="24px" height="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 395 395" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M313.002,0H82C36.785,0,0,36.784,0,81.998v230.993C0,358.211,36.785,395,82,395h231.002 C358.216,395,395,358.211,395,312.991V81.998C395,36.784,358.216,0,313.002,0z M380,312.991C380,349.94,349.945,380,313.002,380 H82c-36.944,0-67-30.06-67-67.009V81.998C15,45.056,45.056,15,82,15h231.002C349.945,15,380,45.056,380,81.998V312.991z"></path> </g> <g> <path d="M86.906,115.4l98.705-63.334c1.704-1.094,3.893-1.084,5.588,0.023c1.695,1.107,2.582,3.107,2.268,5.107l-5.136,32.525 c30.528,0.373,56.424,10.988,76.983,31.582c44.767,44.84,45.151,122.182,45.146,125.451c-0.005,2.758-2.242,4.992-5,4.992 c-0.001,0-0.001,0-0.003,0l-50-0.025c-2.749-0.002-4.982-2.229-4.997-4.979c-0.002-0.275-0.271-27.979-10.156-54.135 c-13.916-36.826-34.842-42.563-51.975-42.889l5.138,32.539c0.043,0.268,0.064,0.537,0.064,0.803c0,1.719-0.862,3.346-2.331,4.305 c-1.695,1.107-3.884,1.117-5.588,0.023l-98.705-63.334c-1.475-0.945-2.365-2.576-2.365-4.328 C84.54,117.977,85.431,116.346,86.906,115.4z"></path> </g> <g> <path d="M264.626,349.525h-29.969c-4.142,0-7.5-3.357-7.5-7.5v-62.906c0-4.143,3.358-7.5,7.5-7.5c4.142,0,7.5,3.357,7.5,7.5 v55.406h22.469c4.142,0,7.5,3.357,7.5,7.5C272.126,346.168,268.768,349.525,264.626,349.525z"></path> </g> <g> <path d="M211.223,350.404c-2.357,0-4.632-1.114-6.07-3.095l-30.798-42.418v38.012c0,4.143-3.358,7.5-7.5,7.5 c-4.142,0-7.5-3.357-7.5-7.5v-61.107c0-3.25,2.093-6.13,5.184-7.134c3.091-0.999,6.477,0.099,8.385,2.727l30.798,42.419v-39.811 c0-4.143,3.358-7.5,7.5-7.5c4.142,0,7.5,3.357,7.5,7.5v62.906c0,3.25-2.093,6.13-5.184,7.133 C212.775,350.284,211.995,350.404,211.223,350.404z"></path> </g> <g> <path d="M111.764,350.403c-21.951,0-39.809-17.495-39.809-38.999c0-21.454,17.858-38.908,39.809-38.908 s39.809,17.454,39.809,38.908C151.572,332.908,133.714,350.403,111.764,350.403z M111.764,287.496 c-13.68,0-24.809,10.726-24.809,23.908c0,13.233,11.129,23.999,24.809,23.999s24.809-10.766,24.809-23.999 C136.572,298.222,125.443,287.496,111.764,287.496z"></path> </g> <g> <path d="M290.274,349.503c-4.142,0-7.5-3.357-7.5-7.5v-21.949l-24.4-36.814c-2.289-3.453-1.345-8.106,2.108-10.396 c3.452-2.288,8.107-1.344,10.395,2.108l19.346,29.189l19.043-29.14c2.266-3.469,6.914-4.442,10.381-2.176 c3.467,2.266,4.441,6.914,2.175,10.381l-24.049,36.8v21.996C297.774,346.146,294.417,349.503,290.274,349.503z"></path> </g> </g> </g></svg>`
    },
    {
      "title": "Unique",
      "content": "Unique in developing and delivering our English language learning curriculum.",
      "svg": `<svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.717.303a1.002 1.002 0 00-1.434 0l-.64.656a1.002 1.002 0 01-.989.265L4.773.975a1.002 1.002 0 00-1.243.718l-.226.887a1 1 0 01-.724.724l-.887.226c-.546.139-.87.7-.718 1.243l.249.881c.1.354-.002.733-.265.99l-.656.639a1.002 1.002 0 000 1.434l.656.64c.263.256.364.635.265.989l-.249.881a1.002 1.002 0 00.718 1.243l.887.226a1 1 0 01.724.724l.226.887c.139.546.7.87 1.243.718l.881-.249c.354-.1.733.002.99.265l.639.656a1.002 1.002 0 001.434 0l.64-.656c.256-.263.635-.364.989-.265l.881.249a1.001 1.001 0 001.243-.718l.226-.887a1 1 0 01.724-.724l.887-.226c.546-.139.87-.7.718-1.243l-.249-.881c-.1-.354.002-.733.265-.99l.656-.639a1.002 1.002 0 000-1.434l-.656-.64a1.002 1.002 0 01-.265-.989l.249-.881a1.002 1.002 0 00-.718-1.243l-.887-.226a1.002 1.002 0 01-.724-.724l-.226-.887c-.139-.546-.7-.87-1.243-.718l-.881.249c-.354.1-.733-.002-.99-.265L8.718.303zM7 4h2v8H7V6H6V5l1-1z" fill="#fff"></path> </g></svg>`
    },
    {
      "title": "Accreditation",
      "content": "We are authorized agents and partners of language schools for studying abroad in America and England.",      
      "svg": `<svg fill="#fff" width="24px" height="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.485 495.485" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_158_"> <path id="XMLID_162_" d="M387.998,105.937h-17.765c-22.969,0-41.605,18.629-41.605,41.605v3.052l52.523-37.304 c0.048-0.034,0.109-0.04,0.159-0.074c-0.05,0.04-0.099,0.049-0.142,0.088l-69.363,63.773l-71.121,30.29 c-10.505,4.464-15.397,16.605-10.93,27.108c3.359,7.862,10.997,12.578,19.036,12.578c2.7,0,5.444-0.534,8.073-1.664l74.398-31.676 c2.18-0.921,4.164-2.205,5.896-3.804l71.973-66.187c0.061-0.055,0.08-0.138,0.142-0.193c-0.061,0.064-0.08,0.144-0.13,0.209 L345.55,219.04c-1.841,2.179-4.081,3.803-6.539,4.859l-2.891,1.228l-7.492,3.187l0.031,242.372c0,13.698,11.112,24.8,24.8,24.8 c5.653,0,10.819-1.971,14.98-5.167c-3.18-5.861-5.164-12.48-5.164-19.633V322.901h16.536v147.784c0,13.698,11.107,24.8,24.8,24.8 c13.688,0,24.793-11.102,24.793-24.8c0,0,0.196-208.497,0.196-323.144C429.601,124.566,410.971,105.937,387.998,105.937z"></path> <path id="XMLID_161_" d="M379.13,96.635c26.704,0,48.323-21.625,48.323-48.313C427.454,21.625,405.835,0,379.13,0 c-26.684,0-48.321,21.625-48.321,48.322C330.809,75.01,352.447,96.635,379.13,96.635z"></path> <path id="XMLID_160_" d="M116.355,96.635c26.685,0,48.323-21.625,48.323-48.313C164.678,21.625,143.04,0,116.355,0 C89.653,0,68.034,21.625,68.034,48.322C68.034,75.01,89.653,96.635,116.355,96.635z"></path> <path id="XMLID_159_" d="M177.092,173.825l-55.15-53.198l44.916,34.664v-7.749c0-22.976-18.636-41.605-41.605-41.605H107.49 c-22.977,0-41.605,18.629-41.605,41.605c0,118.313,0.196,323.144,0.196,323.144c0,13.698,11.107,24.8,24.793,24.8 c13.693,0,24.8-11.102,24.8-24.8V322.901h16.536v147.784c0,7.153-1.99,13.772-5.17,19.633c4.169,3.196,9.332,5.167,14.987,5.167 c13.686,0,24.8-11.102,24.8-24.8l0.031-242.66l-16.504-11.737l-5.275-3.748c-0.307-0.224-0.602-0.5-0.841-0.783l-51.005-61.376 l57.089,55.063c1.295,1.234,2.733,2.309,4.299,3.175l68.13,37.954c-1.714-2.194-3.243-4.559-4.391-7.238 c-5.734-13.475-1.743-28.505,8.682-37.675L177.092,173.825z"></path> </g> </g></svg>`
    },
    {
      "title": "Inclusiveness",
"content": "The academy offers more than 12 daily interactive clubs to get the most out of it and experience the language."     
,"svg": `<svg fill="#fff" width="24px" height="24px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.6,10.8c0-0.3-0.2-0.5-0.4-0.7C31,10,30.7,10,30.4,10c-6,1.5-12.8,1.5-18.8,0c-0.3-0.1-0.6,0-0.8,0.1s-0.4,0.4-0.4,0.7 c-0.2,1.4-0.4,2.9-0.4,4.3C10,24.4,14.9,32,21,32s11-7.6,11-16.9C32,13.7,31.9,12.3,31.6,10.8z M15,21c-0.6,0-1-0.4-1-1 c0-1.7,1.3-3,3-3s3,1.3,3,3c0,0.6-0.4,1-1,1s-1-0.4-1-1c0-0.6-0.4-1-1-1s-1,0.4-1,1C16,20.6,15.6,21,15,21z M21,28 c-2.6,0-4.8-2.1-5-4.9c0-0.4,0.2-0.7,0.5-0.9c0.3-0.2,0.7-0.2,1.1,0c1.9,1.2,5,1.2,6.9,0c0.3-0.2,0.7-0.2,1.1,0 c0.3,0.2,0.5,0.6,0.5,0.9C25.8,25.9,23.6,28,21,28z M27,21c-0.6,0-1-0.4-1-1c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,0.6-0.4,1-1,1s-1-0.4-1-1 c0-1.7,1.3-3,3-3s3,1.3,3,3C28,20.6,27.6,21,27,21z"></path> <path d="M8,16.6c-0.2,0.1-0.4,0.2-0.5,0.3C7.4,16.9,7.2,17,7,17c-0.2,0-0.4,0-0.5-0.1C6.2,16.7,6,16.3,6,15.9c0.1-1.7,1-3.1,2.2-4 c0.1-0.5,0.1-0.9,0.2-1.4c0.1-0.4,0.2-0.8,0.5-1.2C8.3,9.7,7.7,10,7,10c-1.7,0-3-1.3-3-3c0-0.6,0.4-1,1-1s1,0.4,1,1c0,0.6,0.4,1,1,1 s1-0.4,1-1c0-0.6,0.4-1,1-1s1,0.4,1,1c0,0.6-0.2,1.2-0.5,1.7c0.1-0.1,0.1-0.1,0.2-0.2c0.7-0.5,1.6-0.6,2.4-0.4c0,0,0.1,0,0.1,0 C12.1,7.8,12,7.4,12,7c0-0.6,0.4-1,1-1s1,0.4,1,1c0,0.6,0.4,1,1,1s1-0.4,1-1c0-0.6,0.4-1,1-1s1,0.4,1,1c0,0.8-0.3,1.4-0.8,2 c1.5,0.1,3,0.2,4.4,0.2c0.2-1.3,0.3-2.7,0.3-4c0-1.4-0.1-2.9-0.4-4.3c0-0.3-0.2-0.5-0.4-0.7C21,0,20.7,0,20.4,0 c-6,1.5-12.8,1.5-18.8,0C1.3,0,1,0,0.8,0.2C0.6,0.3,0.4,0.6,0.4,0.8C0.1,2.3,0,3.7,0,5.1c0,8.1,3.8,15,8.8,16.5 C8.4,20.1,8.1,18.4,8,16.6z"></path> </g></svg>`
    },
    {
      "title": "Continuity",
"content": "Total daily study hours range from 50-70 hours per month.",      
"svg": `<svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14,18a3.009,3.009,0,0,0-1,.171V18a1,1,0,0,1,1-1,.985.985,0,0,1,.75.339,1,1,0,1,0,1.5-1.322A3,3,0,0,0,11,18v3a3,3,0,0,0,5.544,1.589,3.054,3.054,0,0,0,.121-3.009A2.942,2.942,0,0,0,14,18Zm.849,3.529A1,1,0,1,1,14,20a.954.954,0,0,1,.866.455A1.068,1.068,0,0,1,14.849,21.529ZM21,15a3,3,0,0,0-3,3v3a3,3,0,0,0,6,0V18A3,3,0,0,0,21,15Zm1,6a1,1,0,0,1-2,0V18a1,1,0,0,1,2,0ZM12,13H8a1,1,0,0,1,0-2h3V7a1,1,0,0,1,2,0v5A1,1,0,0,1,12,13ZM24,3V6a3,3,0,0,1-3,3H18a1,1,0,0,1,0-2h2.637A9.991,9.991,0,1,0,8.364,21.318a1,1,0,0,1-.728,1.864A12,12,0,1,1,22,5.374V3a1,1,0,0,1,2,0Z"></path></g></svg>`
    },
    {
      "title": "High quality",
"content": "High-level trainers are selected according to the best educational quality standards.",      
"svg": `<svg fill="#fff" width="24px" height="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.38 489.38" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_129_"> <path id="XMLID_134_" d="M473.725,5.656H213.576c-8.655,0-15.655,7.022-15.655,15.664v110.484l11.319-13.234 c5.375-6.292,12.461-10.172,19.992-11.793V36.978h228.836v204.531H229.233v-34.238l-7.05,8.244 c-6.161,7.189-14.858,11.65-24.262,12.529v29.124c0,8.642,7,15.655,15.655,15.655h84.489L255.141,467.7 c-1.923,8.739,3.6,17.382,12.346,19.31c8.667,1.904,17.382-3.601,19.287-12.331l44.457-201.855h25.844l44.457,201.855 c1.666,7.557,8.369,12.714,15.803,12.705c1.154,0,2.334-0.117,3.502-0.374c8.746-1.928,14.268-10.57,12.328-19.31l-42.92-194.877 h83.481c8.647,0,15.655-7.013,15.655-15.655V21.32C489.38,12.678,482.372,5.656,473.725,5.656z"></path> <path id="XMLID_132_" d="M349.368,97.116c-1.234-3.11-4.732-4.637-7.84-3.406l-92.234,32.555 c-8.465-6.554-20.678-5.383-27.737,2.827l-29.267,34.178l-25.951-22.245c0.171,1.837,0.56,3.622,0.56,5.507v48.291l14.438,12.371 c8.568,7.338,21.385,6.204,28.549-2.198l34.842-40.743l28.1-16.439l73.951-43.267C349.336,103.073,350.469,99.923,349.368,97.116z"></path> <path id="XMLID_131_" d="M109.928,105.776H92.547c-13.308,0-25.01,6.468-32.448,16.327l-53.352,49.12 c-8.313,7.405-9.067,20.232-1.581,28.595l43.528,48.585c7.421,8.309,20.267,9.044,28.579,1.576 c8.334-7.469,9.038-20.262,1.57-28.586l-30.003-33.504l42.616-38.134l-24.82,33.721l24.279,27.107 c13.416,14.992,12.151,38.027-2.834,51.453c-10.231,9.172-24.193,11.324-36.297,7.094c0,0,0.188,93.659,0.188,193.962 c0,13.416,10.874,24.291,24.291,24.291c13.403,0,24.291-10.875,24.291-24.291c0-100.272,0-43.051,0-144.771h16.203 c0,101.646,0,44.468,0,144.771c0,7.004-1.953,13.49-5.067,19.231c4.076,3.135,9.148,5.06,14.676,5.06 c13.424,0,24.298-10.875,24.298-24.291c0-100.272,0.031-58.237,0.031-316.561C150.697,124.022,132.45,105.776,109.928,105.776z"></path> <path id="XMLID_130_" d="M79.592,91.198c6.495,3.376,13.787,5.471,21.62,5.471c7.853,0,15.145-2.095,21.659-5.477 c15.204-7.877,25.684-23.559,25.684-41.862c0-26.146-21.196-47.335-47.344-47.335c-26.144,0-47.335,21.189-47.335,47.335 C53.877,67.643,64.368,83.331,79.592,91.198z"></path> </g> </g></svg>`
    },
    {
      "title": "Follow-up",
"content": "We pay special attention to close follow-up through daily reports to ensure that we track their progress and development.",      
"svg": `<svg fill="#fff" width="24px" height="24px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;}</style></defs><title>help-desk</title><path d="M27,10H21a3.0033,3.0033,0,0,0-3,3v6a2.0023,2.0023,0,0,0,2,2v7a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V21a2.0023,2.0023,0,0,0,2-2V13A3.0033,3.0033,0,0,0,27,10Zm1,9H26v9H22V19H20V13a1.0009,1.0009,0,0,1,1-1h6a1.0009,1.0009,0,0,1,1,1Z"></path><path d="M20,5a4,4,0,1,1,4,4A4.0042,4.0042,0,0,1,20,5Zm2,0a2,2,0,1,0,2-2A2.0023,2.0023,0,0,0,22,5Z"></path><path d="M14,16V13a3.0033,3.0033,0,0,0-3-3H5a3.0033,3.0033,0,0,0-3,3v3H0v2H16V16ZM4,13a1.0009,1.0009,0,0,1,1-1h6a1.0009,1.0009,0,0,1,1,1v3H4Z"></path><path d="M4,5A4,4,0,1,1,8,9,4.0042,4.0042,0,0,1,4,5ZM6,5A2,2,0,1,0,8,3,2.0023,2.0023,0,0,0,6,5Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect></g></svg>`
    }
  ]
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
      },
      keyboard: {
        enabled: true
      },
      mousewheel: {
        thresholdDelta: 70
      },
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    setInterval(() => {
      swiper.slidePrev();
    }, 3000);
  }
};
</script>

<style scoped>
section {
  position: relative;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  direction: ltr;
  padding: 20px;
}

.home-swiper-text {
  color: white;
  text-align: center;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  width: 100%;
}

.home-swiper-text h1 {
  font-size: 48px;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  line-height:50.56px;
}

.home-swiper-text p {
  font-size: 20px;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  line-height:29.4px;
}

.swiper {
  display: flex;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;
  justify-content: center;
}

.swiper-slide {
  width: 80%;
  max-width: 370px;
  height: auto;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: self-start;
  background-color: #fff;
  margin: 10px;
}

.swiper-slide h2 {
  color: #000;
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: 15px;
  padding: 25px 25px 0 25px;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
}

.swiper-slide p {
  color: #969696;
  display: flex;
  font-size: 1rem;
  align-items: center;
  padding: 0 25px 35px 25px;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
}

.swiper-slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.swiper-slide-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff8019; 
  padding: 15px;
  margin-top: 2em;
  border-radius: 15px;
}
.swiper-slide-icon svg {
  width: 80px;
  height: auto;
  border-radius: 15px;
}
.swiper-text {
  height: 50%;
}
.swiper-text p {
  height: 100px;
}
@media (min-width: 600px) {
  .swiper-slide {
    width: 45%;
  }
  .home-swiper-text h1 {
    font-size: 2.8em;
  }
  .home-swiper-text p {
    font-size: 1.2em;
    padding: 1% 10%;
  }
}
@media (min-width: 900px) {
  .swiper-slide {
    width: 30%;
  }
  .home-swiper-text h1 {
    font-size: 3em;
  }
  .home-swiper-text p {
    font-size: 1.3em;
    padding: 1% 15%;
  }
}
@media (min-width: 1200px) {
  .swiper-slide {
    width: 20%;
  }
  .home-swiper-text h1 {
    font-size: 3.2em;
  }
  .home-swiper-text p {
    font-size: 1.3em;
    padding: 1% 20%;
  }
}
</style>
