export const sendEmail = (
  e: any,
  emailjs: any,
  toast:any
) => {
  e.preventDefault();
  emailjs
    .sendForm(
      `${process.env.NEXT_PUBLIC_MAIL_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID}`,
      e.target,
      `${process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY}`
    )
    .then(
      () => {
        toast.success("Your message was sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
      () => {
        toast.error("Something went wrong, try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    );
};
