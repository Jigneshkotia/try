import { server } from "../constants/config";

export const uploadVideo = async (videoBlob) => {
    const formData = new FormData();
    formData.append('video', videoBlob);
  
    const response = await fetch(`${server}/api/process-video/`, {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error('Failed to process video');
    }
  
    const result = await response.json();
    return result.text;
  };


// export const uploadVideo = async (videoBlob) => {
//   const formData = new FormData();
//   formData.append('video', videoBlob);

//   // Get CSRF token from cookies
//   const getCookie = (name) => {
//       let cookieValue = null;
//       console.log("yup1")
//       if (document.cookie && document.cookie !== '') {
//         console.log("yup2")
//           const cookies = document.cookie.split(';');
//           for (let i = 0; i < cookies.length; i++) {
//               const cookie = cookies[i].trim();
//               if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 console.log("yuploop")
//                   cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                   break;
//               }
//           }
//       }
//       console.log("yup3")
//       return cookieValue;
//   };

//   const csrfToken = getCookie('ajs_anonymous_id');
//   console.log(csrfToken)
//   console.log(document.cookie);

//   const response = await fetch(`${server}/api/process-video/`, {
//       method: 'POST',
//       body: formData,
//       headers: {
//           'X-CSRFToken': csrfToken,  // Include CSRF token in the headers
//       },
//   });

//   if (!response.ok) {
//       throw new Error('Failed to process video');
//   }

//   const result = await response.json();
//   return result.text;
// };