import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeEyeTest = () => {

  const realCards = [
    { img: "https://static.lenskart.com/media/desktop/img/HTO/A_char.svg", text: "Difficulty Reading" },
    { img: "https://static.lenskart.com/media/desktop/img/HTO/EyeMulti.svg", text: "Haizy Vision" },
    { img: "https://static.lenskart.com/media/desktop/img/HTO/Eye.svg", text: "Bright Light Discomfort" },
    { img: "https://static.lenskart.com/media/desktop/img/HTO/EyeWithDrop.svg", text: "Water Eyes Discomfort" },
    { img: "https://static.lenskart.com/media/desktop/img/HTO/PersonTwo.svg", text: "Frequent Neck Pain" },
    { img: "https://static.lenskart.com/media/desktop/img/HTO/Person.svg", text: "Frequent Headaches" },
  ];

  const cards = [...realCards.slice(-3), ...realCards, ...realCards.slice(0, 3)];
  const [index, setIndex] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransitionEnabled(true);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index === cards.length - 3) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(3);
      }, 600);
    }
    if (index === 2) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(realCards.length + 2);
      }, 600);
    }
  }, [index]);

  const faqData = [
    { q: "What is Lenskart Home Eye Test?", a: "It is a professional 12-step eye checkup at your home using advanced equipment." },
    { q: "Why should I opt for Lenskart Home Eye Test?", a: "It offers convenience, accuracy and a detailed checkup by certified professionals." },
    { q: "What cities is this service available in?", a: "It is available in all major metro cities." },
    { q: "Where to go for an Eye Check-Up?", a: "A professional comes to your home for the eye test." },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="w-full bg-white">

      {/* HEADER — RESPONSIVE FIX */}
      <div className="w-full bg-[#071A52] py-4 px-6 sm:px-10 lg:px-28 
      flex flex-col md:flex-row justify-between items-center text-white text-lg font-semibold gap-3">

        <Link to="/" className="w-full md:w-auto flex justify-center md:justify-start">
          <svg width="1em" height="1em" viewBox="0 0 264 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64 h-7">
          <path d="M15.745 22.63c.984.22 1.99.329 2.997.323 3.08 0 6.023-1.1 9.13-3.545-1.113-1.757-2.108-3.818-2.62-6.152-.19 5.632-4.322 9.257-9.507 9.367v.007Zm43.86-14.538c0-.825-.16-1.132-.784-1.347l-2.884-.839c1.271 1.841 1.918 3.928 1.702 7.006l-.054.77h1.189c.513 0 .837-.358.837-.88l-.006-4.71ZM0 12.802c0 .522.318.88.81.88h1.081l-.054-.798c-.108-2.335.567-5 1.944-6.978l-3.02.852C.16 6.951 0 7.274 0 8.105v4.697Zm10.452-7.198a8.294 8.294 0 0 1 5.266-1.896c4.861 0 7.946 2.638 9.911 8.434l.919 2.83c2.053 6.18 6.914 9.943 13.097 10.878-3.972-1.294-7.372-4.78-9.992-11.786l-1.08-2.8c-2.025-5.413-6.21-8.653-11.45-8.653-2.89 0-5.105.987-6.675 2.993h.004ZM46.425.66c4.023 1.704 6.515 6.539 6.515 12.006 0 3.818-1.271 6.627-4.618 8.707 4.996-.412 8.669-4.45 8.669-9.422 0-5.686-4.402-10.466-10.56-11.29h-.006ZM23.254.385c2.701.989 4.24 1.923 6.615 4.364A16.395 16.395 0 0 1 36.027.357L23.254.385Zm7.047 4.95c1.243 1.263 2.945 3.879 4.024 7.856 0-5.274 4.322-9.478 9.265-9.478 2.483 0 5.94 1.044 7.966 4.534C50.016 2.939 45.608 0 41.186 0 37.62 0 33.57 1.869 30.3 5.334Zm-27.708 7.55c0 7.415 5.616 12.855 13.26 12.855 3.565 0 6.78-1.21 9.047-3.433a14.014 14.014 0 0 1-6.374 1.454c-7.129 0-11.882-4.424-11.882-10.991 0-6.429 4.32-10.992 10.647-10.992 5.59 0 9.885 3.433 12.26 9.698l1.189 3.159c2.62 7.033 7.05 11.098 13.1 11.098 5.265 0 9.586-2.609 11.557-7.141-2.322 2.719-6.834 4.065-10.72 4.065-5.214 0-8.752-2.885-10.911-8.927l-.763-2.254C30.409 4.258 24.36 0 16.686 0 8.344 0 2.593 5.274 2.593 12.884ZM95.68 8.857c-1.97 0-3.538.746-4.378 2.212l-.177-1.782h-2.813v13.637h3.337v-7.608c0-1.953.897-3.476 3.191-3.476 2.149 0 2.933 1.523 2.933 3.476v7.608h3.336v-8.613c0-3.046-1.826-5.454-5.422-5.454h-.006ZM247.364 15.133v7.785h-3.16v-7.785c0-1.669-1.32-3.027-2.944-3.027-1.258 0-2.332.815-2.749 1.959-.12.335-.19.695-.19 1.068v7.785h-3.134v-7.602c0-.184-.007-.367-.026-.537-.132-1.688-.96-2.939-2.907-2.939-2.293 0-3.191 1.523-3.191 3.476v7.602h-3.336V9.288h2.818l.171 1.775c.84-1.46 2.407-2.206 4.379-2.206 1.814 0 3.179.613 4.082 1.612a5.987 5.987 0 0 1 4.083-1.612c3.368 0 6.104 2.813 6.104 6.276ZM79.789 8.364c-4.38 0-7.337 3.217-7.337 7.236s2.724 7.26 7.394 7.26c3.16 0 5.567-1.547 6.641-4.05l-3.045-.973c-.582 1.32-1.884 2.035-3.565 2.035-2.376 0-3.74-1.466-4.088-3.242h10.907c.404-4.879-2.433-8.266-6.9-8.266h-.007Zm-3.943 5.884c.461-1.637 1.8-2.901 3.943-2.901 2.142 0 3.337 1.32 3.627 2.9h-7.57ZM256.282 8.364c-4.379 0-7.337 3.217-7.337 7.236s2.724 7.26 7.394 7.26c3.16 0 5.567-1.547 6.642-4.05l-3.046-.973c-.582 1.32-1.883 2.035-3.564 2.035-2.377 0-3.742-1.466-4.089-3.242h10.907c.405-4.879-2.433-8.266-6.901-8.266h-.006Zm-3.943 5.884c.461-1.637 1.801-2.901 3.943-2.901 2.142 0 3.337 1.32 3.627 2.9h-7.57ZM69.337 2.925H67.61v19.792h3.337v-18.2c0-.954-.727-1.592-1.605-1.592h-.007ZM129.155 9.017h-4.031l-5.479 5.599V4.46c0-.84-.733-1.535-1.523-1.535h-1.808v19.729h3.331v-3.988l1.915-1.952 3.918 5.94h3.861l-5.511-8.24 5.34-5.397h-.013ZM147.949 11.183l-.202-2.066h-2.812v13.637h3.336V16.15c0-2.73 1.018-3.905 3.362-3.905h.581V8.857c-2.117 0-3.595.835-4.259 2.326h-.006ZM160.627 12.15V9.226h-3.773V4.902h-3.336V17.37c0 3.558 1.365 5.486 5.308 5.486h1.801V19.84h-1.738c-1.276 0-2.028-.689-2.028-2.035v-5.655h3.772-.006Z" fill="#fff"></path><path d="M139.917 10.658c-.986-1.548-2.585-2.294-4.639-2.294-4.088 0-6.989 2.9-6.989 7.236 0 4.335 2.869 7.26 6.989 7.26 1.858 0 3.305-.6 4.291-1.806v1.377h3.337V8.794h-2.812l-.171 1.87-.006-.006Zm-4.152 9.214c-2.439 0-4.12-1.72-4.12-4.278 0-2.56 1.681-4.247 4.12-4.247 2.294 0 4 1.694 4 4.247s-1.713 4.278-4 4.278Z" fill="#fff"></path><path d="M188.841 12.144V9.218h-3.773V4.902h-3.337V17.37c0 3.558 1.365 5.486 5.309 5.486h1.801V19.84h-1.738c-1.277 0-2.029-.689-2.029-2.035v-5.655h3.773l-.006-.007ZM176.992 10.658c-.986-1.548-2.585-2.294-4.639-2.294-4.088 0-6.989 2.9-6.989 7.236 0 4.335 2.869 7.26 6.989 7.26 1.858 0 3.305-.6 4.291-1.806v1.377h3.337V8.794h-2.812l-.171 1.87-.006-.006Zm-4.152 9.214c-2.439 0-4.12-1.72-4.12-4.278 0-2.56 1.681-4.247 4.12-4.247 2.294 0 4 1.694 4 4.247s-1.712 4.278-4 4.278Z" fill="#9999B3"></path><path d="m110.823 14.374-2.579-.405c-1.535-.259-2.148-.6-2.148-1.352 0-.752.695-1.409 2.262-1.409 2.029 0 3.103.973 3.684 2.066l2.376-1.807c-.954-1.668-2.698-3.103-5.655-3.103-3.596 0-5.833 1.808-5.833 4.36 0 2.124 1.276 3.59 4.063 3.988l2.522.373c1.858.284 2.117.86 2.117 1.491 0 .803-.898 1.435-2.32 1.435-1.857 0-3.425-.803-4.467-2.553l-2.642 1.839c1.479 2.47 3.943 3.558 6.876 3.558 3.772 0 5.769-2.067 5.769-4.62 0-1.978-1.068-3.419-4.032-3.874l.007.013ZM216.893 11.208c2.484 0 4.506 1.978 4.506 4.405 0 2.426-2.022 4.404-4.506 4.404-2.483 0-4.505-1.978-4.505-4.404 0-2.427 2.022-4.405 4.505-4.405Zm0-2.844c-4.057 0-7.349 3.242-7.349 7.249 0 4.006 3.292 7.248 7.349 7.248s7.35-3.242 7.35-7.248c0-4.007-3.293-7.249-7.35-7.249ZM208.412 14.755v7.911h-3.451v-7.911c0-1.7-1.44-3.078-3.21-3.078-1.769 0-3.147 1.32-3.204 2.97-.006.038-.006.07-.006.108v7.911h-3.406V2.925h1.794c.891 0 1.618.727 1.618 1.618v4.619a6.792 6.792 0 0 1 3.204-.79c3.672 0 6.661 2.863 6.661 6.383ZM198.547 14.647v8.02-8.02Z" fill="#fff"></path></svg>
        </Link>

        {/* Contact Section Responsive */}
        <div className="flex items-center gap-2 md:gap-3">
          <svg className="text-[#000042] bg-white rounded-full p-1 w-7 h-7" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeWidth="1.25" d="M11.707 5A4.167 4.167 0 0 1 15 8.292m-3.292-6.625a7.5 7.5 0 0 1 6.625 6.617m-9.81 3.269A12.168 12.168 0 0 1 6.15 8.21a1.416 1.416 0 0 1-.094-.221.872.872 0 0 1 .122-.719c.04-.055.088-.103.183-.198.291-.292.437-.437.532-.584.36-.552.36-1.264 0-1.817-.095-.146-.24-.292-.532-.583l-.163-.163c-.442-.442-.664-.664-.902-.784a1.667 1.667 0 0 0-1.504 0c-.238.12-.46.342-.902.784l-.132.132c-.441.441-.662.662-.83.962-.187.333-.322.85-.32 1.232 0 .344.067.58.2 1.05a15.865 15.865 0 0 0 4.062 6.902 15.866 15.866 0 0 0 6.903 4.062c.47.133.706.2 1.05.201.381.001.899-.133 1.232-.32.3-.169.52-.39.962-.83l.131-.132c.443-.443.664-.665.785-.902.239-.473.239-1.032 0-1.505-.12-.238-.342-.46-.785-.902l-.162-.162c-.292-.292-.437-.437-.584-.533a1.667 1.667 0 0 0-1.817 0c-.146.096-.292.241-.583.533a1.686 1.686 0 0 1-.199.182.872.872 0 0 1-.718.123c-.066-.02-.118-.044-.222-.094a12.17 12.17 0 0 1-3.341-2.372Z"></path>
          </svg>
          <div>+919021340340</div>
        </div>
      </div>

      {/* MAIN LAYOUT — MOBILE STACKED, DESKTOP SIDE BY SIDE */}
      <div className="flex flex-col lg:flex-row w-full justify-center gap-10 px-6 sm:px-10 lg:px-12 mt-10">

        {/* LEFT COLUMN (FULL WIDTH ON MOBILE) */}
        <div className="w-full lg:w-[60%] flex flex-col space-y-20">

          {/* VIDEO — Now 100% responsive */}
          <div className="w-full max-w-[550px] mx-auto">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
              <video
                src="https://static.lenskart.io/video/yt-videos/EyeTest-Square-LK@Home.mp4#t=0.1"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 6 SIGNS SECTION */}
          <div className="mt-10 bg-[#F7F2ED] p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-3">
              <div className="text-5xl sm:text-6xl text-[#010043] font-bold">6</div>
              <h2 className="font-semibold text-[#010043] text-xl sm:text-2xl leading-tight">
                Signs you <br /> need an eyetest
              </h2>
            </div>

            <div className="relative overflow-hidden mt-5">
              <div
                className="flex items-center"
                style={{
                  transform: `translateX(-${index * 240}px)`,
                  transition: transitionEnabled ? "transform 0.6s ease" : "none",
                }}
              >
                {cards.map((card, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 mx-3 bg-white shadow-md border rounded-2xl flex items-center gap-4 px-4 py-5"
                    style={{ width: "220px" }}
                  >
                    <img src={card.img} className="w-10 sm:w-12" />
                    <p className="font-semibold text-[#071A52] text-sm sm:text-lg leading-5">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4 px-1 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071A52]">FAQs About Home Eye Tests</h2>

            {faqData.map((item, i) => (
              <div key={i} className="border-b pb-4 cursor-pointer">
                <div
                  className="flex justify-between text-lg sm:text-xl font-semibold"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  {item.q}
                  <span>{openFAQ === i ? (
                      <ChevronDown className="w-6 h-6 rotate-180 transition-transform" />
                    ) : (
                      <ChevronRight className="w-6 h-6 transition-transform" />
                    )}
                  </span>
                </div>
                {openFAQ === i && (
                  <p className="mt-2 text-gray-600 p-2 text-base sm:text-lg">{item.a}</p>
                )}
              </div>
            ))}
          </div>

          {/* REVIEWS */}
          <div className="mt-10 px-1 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071A52] mb-4">Rating & Reviews</h2>

            <div className="space-y-8">
              {[ 
                { name: "Neha Kapoor", review: "Top-notch service, convenient and accurate." },
                { name: "Mohan Joshi", review: "Quality check-up at home. Highly recommended!" }
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="w-10 sm:w-12" />
                  <div>
                    <h3 className="font-bold text-lg">{r.name}</h3>
                    <p className="text-gray-700">{r.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FIXED CARD — Moves below on mobile */}
        <div className="w-full lg:w-[32%] lg:sticky top-10 h-fit">
          <div className="bg-white rounded-3xl shadow-xl p-6 border space-y-4">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#071A52]">Lenskart at Home</h2>
            <p className="text-[#000042] text-base">Eye Test & Frame Trial Service</p>

            <div className="space-y-3 mt-4">
              <h2 className="text-[#000042] text-lg font-semibold">Eye test eligibility</h2>

              {[
                { img: "HTOAppointmentConfirmed.svg", text: "A well-lit room with 10 ft space" },
                { img: "HTOAppointmentConfirmed.svg", text: "Required age: 14 - 75 years" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <img src={`https://static.lenskart.com/media/desktop/img/HTO/${item.img}`} className="w-8" />
                  <p className="text-sm sm:text-base">{item.text}</p>
                </div>
              ))}
              <div className="flex gap-4 items-center">
                <img src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/RedCross.svg" className="w-8"/>
                <p className="text-sm sm:text-base">Not for Diabetics or High BP</p>
              </div>
              
            </div>

            <div className="space-y-3 mt-4">
              <h2 className="text-[#000042] text-lg font-semibold">What to expect?</h2>

              {[
                { img: "EyeWithTorch.svg", text: "12 Step Eye Checkup" },
                { img: "EyeWithBoxes.svg", text: "Latest Eye Test Equipments" },
                { img: "Glasses.svg", text: "Try 150+ frames at home" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <img src={`https://static.lenskart.com/media/desktop/img/HTO/${item.img}`} className="w-8" />
                  <p className="text-sm sm:text-base">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-lg font-semibold pt-2">
              <div>Lenskart at Home</div>
              <div className="flex gap-4">
                <div className="text-[#66668e] line-through text-sm">₹120</div>
                <div className="text-[#071A52] font-bold text-lg">₹99</div>
              </div>
            </div>

            <button className="w-full bg-[#071A52] text-white py-3 rounded-lg text-lg sm:text-xl font-semibold mt-3">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeEyeTest;
