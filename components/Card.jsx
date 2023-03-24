const Card = ({ engine }) => {
  return (
    // <div className="h-full overflow-hidden">
    //   <div className="h-full bg-gray-100 hover:bg-yellow-50 p-6 rounded-lg">
    //     {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" /> */}
    //     <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">{engine?.modelconstructioninterval}</h3>
    //     <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
    //       {engine?.make} {engine?.modeldescription} {engine?.description_x}
    //     </h2>

    //     <div className="group flex relative">
    //       <span className="leading-relaxed text-base text-gray-500 inline-flex items-center">
    // <svg className="w-4 h-4 mr-1" stroke="none" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M11.0195 2.40431C11.6283 2.06184 12.3717 2.06184 12.9805 2.40431L19.9805 6.34181C20.6103 6.69605 21 7.36241 21 8.08496V15.8296C21 16.4661 20.6634 17.0551 20.1151 17.3783L12.8867 21.6382C12.3396 21.9607 11.6604 21.9607 11.1133 21.6382L3.88495 17.3783C3.33659 17.0551 3 16.4661 3 15.8296V8.08496C3 7.36241 3.38972 6.69605 4.01948 6.34181L11.0195 2.40431ZM5.1286 8.13479C5.39937 7.65344 6.00908 7.48272 6.49044 7.75348L12.0002 10.8527L17.5099 7.75348C17.9913 7.48272 18.601 7.65344 18.8718 8.13479C19.1425 8.61615 18.9718 9.22587 18.4904 9.49663L13.0002 12.5849V19C13.0002 19.5523 12.5525 20 12.0002 20C11.4479 20 11.0002 19.5523 11.0002 19V12.5849L5.50992 9.49663C5.02856 9.22587 4.85784 8.61615 5.1286 8.13479Z"
    //     fill="#9CA3AF"
    //   />
    // </svg>
    //         {engine?.engine}
    //       </span>
    //       <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md opacity-0 m-1">
    //         Code Moteur
    //       </span>
    //     </div>

    //     <div className="group flex relative">
    //       <span className="leading-relaxed text-base text-gray-400 inline-flex items-center">
    // <svg className="w-4 h-4 mr-1" stroke="none" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M12.3327 3.63004C12.9116 2.74599 14.2858 3.15586 14.2858 4.21256V9.39999H17.7635C18.6601 9.39999 19.1983 10.3956 18.7071 11.1457L12.7695 20.214C12.1817 21.1118 10.7144 20.7524 10.7144 19.6027V14.6H7.18878C6.31275 14.6 5.78696 13.6272 6.26683 12.8943L12.3327 3.63004Z"
    //     fill="#9CA3AF"
    //   />
    // </svg>
    //         {engine?.power}
    //       </span>
    //       <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md opacity-0 m-1">
    //         Puissance
    //       </span>
    //     </div>

    //     <div className="group flex relative">
    //       <span className="leading-relaxed text-base text-gray-400 inline-flex items-center">
    // <svg
    //   className="w-4 h-4 mr-1"
    //   stroke="none"
    //   strokeWidth="2"
    //   fill="currentColor"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   viewBox="0 0 700 700"
    // >
    //   <g>
    //     <path d="m257.29 428.68c8.3633 8.3711 21.734 8.8555 30.582 0l141.51-141.51h0.21484l69.137-69.355c7.5391-8.6172 7.1094-21.539-0.86328-29.508l-89.598-89.598-240.58 240.37zm62.891-166.06c5.4375-14.113 24.367-17.836 35.109-7.1055 7.6289 8.4883 9.125 20.422 0 30.586-7.375 7.3672-21.273 9.0977-30.371 0-5.7148-5.7344-8.3945-14.707-4.7383-23.48z" />
    //     <path d="m97.898 269.29 39.418 39.418 240.37-240.59-39.418-39.414c-7.3242-7.1094-18.523-8.1875-27.141-2.5859-83.785 55.355-156.37 127.94-215.81 215.82-5.8164 8.6133-4.7383 20.031 2.582 27.352z" />
    //     <path d="m602.12 373.76c-8.4023-8.4023-21.969-8.4023-30.371 0l-17.66 17.66c-8.6172-4.3086-17.879-6.6797-27.57-7.1055l-66.555-66.77-71.293 71.508 66.555 66.555c0.42969 9.6953 2.8047 19.168 7.1094 27.566l-17.449 17.664c-8.3984 8.3984-8.3984 21.969 0 30.371 8.043 8.0508 21.32 8.5977 30.367 0l17.664-17.66c22.535 12.055 55.711 10.203 78.828-12.926 21.953-21.949 25.258-54.16 12.926-78.828l17.449-17.449c8.3984-8.4023 8.3984-22.188 0-30.586z" />
    //   </g>
    // </svg>
    //         {engine?.NumberOfCylinders}
    //       </span>
    //       <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md opacity-0 m-1">
    //         Nombre de cylindre
    //       </span>
    //     </div>

    //     {/* <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"> */}
    //     {/* <h3 className="tracking-widest text-yellow-500 text-right bottom-0 font-medium title-font">1 000 €</h3> */}

    //     <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
    //       Button
    //       <svg
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         className="w-4 h-4 ml-auto"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M5 12h14M12 5l7 7-7 7"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </div>

    <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
      <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
        {engine?.cis} - {engine?.cie}
      </h2>
      <h1 class="text-xl text-gray-900 leading-none pb-4 mb-4 border-b border-gray-200">
        {engine?.make}
        <br />
        {engine?.model}
        <br />
        {engine?.spec}
      </h1>
      <p class="flex items-center text-gray-600 mb-2">
        <svg
          className="w-4 h-4 mr-1"
          stroke="none"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0195 2.40431C11.6283 2.06184 12.3717 2.06184 12.9805 2.40431L19.9805 6.34181C20.6103 6.69605 21 7.36241 21 8.08496V15.8296C21 16.4661 20.6634 17.0551 20.1151 17.3783L12.8867 21.6382C12.3396 21.9607 11.6604 21.9607 11.1133 21.6382L3.88495 17.3783C3.33659 17.0551 3 16.4661 3 15.8296V8.08496C3 7.36241 3.38972 6.69605 4.01948 6.34181L11.0195 2.40431ZM5.1286 8.13479C5.39937 7.65344 6.00908 7.48272 6.49044 7.75348L12.0002 10.8527L17.5099 7.75348C17.9913 7.48272 18.601 7.65344 18.8718 8.13479C19.1425 8.61615 18.9718 9.22587 18.4904 9.49663L13.0002 12.5849V19C13.0002 19.5523 12.5525 20 12.0002 20C11.4479 20 11.0002 19.5523 11.0002 19V12.5849L5.50992 9.49663C5.02856 9.22587 4.85784 8.61615 5.1286 8.13479Z"
            fill="currentColor"
          />
        </svg>
        {engine?.engine}
      </p>
      <p class="flex items-center text-gray-600 mb-2">
        <svg
          className="w-4 h-4 mr-1"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3327 3.63004C12.9116 2.74599 14.2858 3.15586 14.2858 4.21256V9.39999H17.7635C18.6601 9.39999 19.1983 10.3956 18.7071 11.1457L12.7695 20.214C12.1817 21.1118 10.7144 20.7524 10.7144 19.6027V14.6H7.18878C6.31275 14.6 5.78696 13.6272 6.26683 12.8943L12.3327 3.63004Z"
            fill="currentColor"
          />
        </svg>
        {engine?.power}
      </p>
      <p class="flex items-center text-gray-600 mb-2">
        <svg
          className="w-4 h-4 mr-1"
          stroke="none"
          strokeWidth="2"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 650 650"
        >
          <g>
            <path d="m257.29 428.68c8.3633 8.3711 21.734 8.8555 30.582 0l141.51-141.51h0.21484l69.137-69.355c7.5391-8.6172 7.1094-21.539-0.86328-29.508l-89.598-89.598-240.58 240.37zm62.891-166.06c5.4375-14.113 24.367-17.836 35.109-7.1055 7.6289 8.4883 9.125 20.422 0 30.586-7.375 7.3672-21.273 9.0977-30.371 0-5.7148-5.7344-8.3945-14.707-4.7383-23.48z" />
            <path d="m97.898 269.29 39.418 39.418 240.37-240.59-39.418-39.414c-7.3242-7.1094-18.523-8.1875-27.141-2.5859-83.785 55.355-156.37 127.94-215.81 215.82-5.8164 8.6133-4.7383 20.031 2.582 27.352z" />
            <path d="m602.12 373.76c-8.4023-8.4023-21.969-8.4023-30.371 0l-17.66 17.66c-8.6172-4.3086-17.879-6.6797-27.57-7.1055l-66.555-66.77-71.293 71.508 66.555 66.555c0.42969 9.6953 2.8047 19.168 7.1094 27.566l-17.449 17.664c-8.3984 8.3984-8.3984 21.969 0 30.371 8.043 8.0508 21.32 8.5977 30.367 0l17.664-17.66c22.535 12.055 55.711 10.203 78.828-12.926 21.953-21.949 25.258-54.16 12.926-78.828l17.449-17.449c8.3984-8.4023 8.3984-22.188 0-30.586z" />
          </g>
        </svg>
        {engine?.noc} cylindres
      </p>
      <p class="flex items-center text-gray-600 mb-2">
        <svg
          className="w-4 h-4 mr-1"
          stroke="none"
          strokeWidth="2"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 450 300"
        >
          <g>
            <path
              d="M270.265,149.448c-36.107-47.124-70.38-78.948-73.439-141.372c0-1.836-0.612-3.06-1.836-4.284
		c-0.612-3.06-3.672-4.896-6.732-3.06c-3.672,0-6.731,2.448-6.731,6.732c-77.112,83.232-207.468,294.372-43.452,354.959
		c74.052,27.541,157.896-9.791,172.584-90.576C318.614,228.396,295.969,182.497,270.265,149.448z M138.686,323.256
		c-17.748-10.404-28.764-31.211-34.272-49.572c-2.448-9.18-3.672-18.359-3.06-27.539c3.672-15.912,8.568-31.213,14.076-46.512
		c3.06,13.463,9.18,26.928,17.748,36.719c19.584,21.422,59.364,34.273,70.38,61.201c6.732,16.523-19.584,30.6-30.6,34.271
		C161.33,335.496,148.477,329.377,138.686,323.256z"
            />
          </g>
        </svg>
        {engine?.type}
      </p>
      <p class="flex items-center text-gray-600 mb-6">
        <svg className="w-4 h-4 mr-1" viewBox="0 0 600 600" fill="currentColor">
          <g>
            <path
              class="st0"
              d="M256.004,0C114.613,0,0.001,114.613,0.001,256.004C0.001,397.387,114.613,512,256.004,512
		c141.383,0,255.996-114.613,255.996-255.996C511.999,114.613,397.387,0,256.004,0z M256.004,419.18
		c-90.128,0-163.185-73.048-163.185-163.176S165.876,92.82,256.004,92.82c90.12,0,163.176,73.057,163.176,163.185
		S346.124,419.18,256.004,419.18z"
            />
            <path
              class="st0"
              d="M256.004,271.78c8.718,0,15.776-7.058,15.776-15.776c0-8.718-7.058-15.784-15.776-15.784
		c-8.725,0-15.784,7.066-15.784,15.784C240.219,264.722,247.279,271.78,256.004,271.78z"
            />
            <path
              class="st0"
              d="M150.727,196.65c1.108,2.954,3.495,5.239,6.5,6.212l56.239,18.289c5.239,1.684,10.977,0.787,15.429-2.446
		c4.444-3.25,7.092-8.421,7.092-13.923v-59.1c0-3.148-1.446-6.136-3.927-8.082c-2.471-1.972-5.704-2.683-8.768-1.972
		c0,0,0.838-0.634-4.85,1.152c-26.541,8.37-49.283,25.34-64.898,47.666c-3.216,4.587-1.98,3.275-1.98,3.275
		C149.948,190.404,149.644,193.688,150.727,196.65z"
            />
            <path
              class="st0"
              d="M212.147,270.265c-1.701-5.248-5.807-9.361-11.045-11.045l-56.215-18.264
		c-2.996-0.973-6.271-0.516-8.895,1.218c-2.624,1.752-4.308,4.604-4.579,7.752c0,0-0.338-0.998-0.398,4.96
		c-0.254,27.828,8.87,54.683,25.273,76.451c3.368,4.469,2.488,2.886,2.488,2.886c2.073,2.378,5.103,3.682,8.235,3.554
		c3.156-0.127,6.076-1.684,7.921-4.24l34.768-47.861C212.933,281.234,213.839,275.487,212.147,270.265z"
            />
            <path
              class="st0"
              d="M269.927,309.206c-3.25-4.443-8.422-7.084-13.923-7.084c-5.509,0-10.681,2.641-13.906,7.084l-34.75,47.81
		c-1.845,2.547-2.438,5.814-1.575,8.861c0.838,3.038,3.03,5.51,5.95,6.738c0,0-1.066,0.025,4.596,1.921
		c26.389,8.844,54.75,8.454,80.505-0.424c5.289-1.819,3.52-1.473,3.52-1.473c2.912-1.218,5.095-3.706,5.933-6.736
		c0.846-3.047,0.245-6.297-1.6-8.845L269.927,309.206z"
            />
            <path
              class="st0"
              d="M367.155,240.939l-56.248,18.281c-5.23,1.684-9.352,5.797-11.037,11.045
		c-1.709,5.222-0.804,10.968,2.446,15.403l34.726,47.819c1.862,2.564,4.782,4.096,7.938,4.249c3.149,0.135,6.178-1.194,8.235-3.58
		c0,0-0.304,1.007,3.241-3.775c16.564-22.368,24.984-49.478,24.502-76.705c-0.094-5.586-0.33-3.792-0.33-3.792
		c-0.271-3.148-1.946-6-4.578-7.735C373.426,240.423,370.16,239.957,367.155,240.939z"
            />
            <path
              class="st0"
              d="M283.112,218.706c4.461,3.225,10.182,4.13,15.421,2.446l56.198-18.289c3.005-0.966,5.392-3.259,6.5-6.212
		c1.101-2.962,0.779-6.255-0.863-8.954c0,0,0.872,0.592-2.59-4.249c-16.148-22.674-39.321-39.042-65.372-47.006
		c-5.358-1.625-3.724-0.863-3.724-0.863c-3.072-0.711-6.296,0.016-8.751,1.98c-2.48,1.938-3.919,4.926-3.919,8.066v59.152
		C276.012,210.284,278.661,215.456,283.112,218.706z"
            />
          </g>
        </svg>
        {engine?.drive}
      </p>
      <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
        {engine?.price} €
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-auto"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <p class="text-xs text-gray-500 mt-3">
        Literally you probably haven't heard of them jean shorts.
      </p>
    </div>
  );
};
export default Card;
