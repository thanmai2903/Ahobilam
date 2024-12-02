import React, { useState, useEffect } from "react";

function Main() {
  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
    day: "",
  });
  const [panchangam, setPanchangam] = useState({
    tithi: "Padyami & Vidiya",
    paksha: "Shukla",
    masa: "Margashira",
    nakshatra: "Jweshta",
  });
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = now.toLocaleDateString("en-US", options);
      const time = now.toLocaleTimeString();
      const day = now.toLocaleString("en-US", { weekday: "long" });
      setDateTime({ date, time, day });
    };
    const interValId = setInterval(updateDateTime, 1000);
    updateDateTime();
    return () => clearInterval(interValId);
  }, []);
  useEffect(() => {
    const carousel = document.getElementById("carousel");
    const images = carousel.children;
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    let currentIndex = 0;

    function updateCarousel() {
      const width = images[0].clientWidth;
      carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    const handleNextClick = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    };

    const handlePrevClick = () => {
      currentIndex = (currentIndex - 1) % images.length;
      updateCarousel();
    };
    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    return () => {
      // Cleanup event listeners on unmount
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div>
      <div className="flex lg:mb-20 sm:mb-10">
        <div className="text-left lg:ml-20">
          <div className="sm:text-6xl lg:text-7xl text-5xl ml-5 mt-8 sm:mt-5 lg:mt-28 text-amber-950 sm:ml-8">
            Ahobilam
          </div>
          <div className="sm:text-5xl lg:text-6xl text-3xl mb-5 ml-5 mt-5 leading-tight sm:mt-5 sm:ml-8">
            Spiritual Adobe of Nava Narasimhas
          </div>
          <div className="sm:mt-5 lg:mt-10 lg:text-xl text-sm mb-10 ml-5 text-[20px] sm:ml-10 lg:ml-10">
            Welcome to Ahobilam, the sacred site where Lord Narasimha vanquished
            Hiranyakashipu, ensuring the protection of Prahalada. Goddess
            Mahalakshmi, took the form of Chenchu Lakshmi, united with the Lord
            and married him among the Chenchu, a tribe of hunters dwelling in
            the hills and united with lot.
          </div>
        </div>
        <div>
          <img
            className="sm:w-[3000px] mt-60 w-[1500px] lg:mt-48 sm:mr-20 lg:mr-10 lg:w-[2000px] sm:mt-96 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVJqIz3wJe7377B-abKDTB35gP5k_DX7Tqg&s"
          />
        </div>
      </div>
      <div className="relative  lg:max-w-md sm:max-w-md lg:mx-auto sm:mx-auto lg:mb-20 sm:mb-10">
        <div className="overflow-hidden ml-10 mr-10">
          <div id="carousel" className="flex transition-transform duration-500">
            <img
              className="lg:w-[2000px] rounded-md  sm:w-[100%]"
              src="https://ahobilamtemple.com/ahobilam/assets/images/MicrosoftTeams-image%20(37).png"
            />
            <img
              className=" sm:w-[2000px] lg:w-[2000px] rounded-md"
              src="https://ahobilamtemple.com/ahobilam/assets/images/temple-1.jpg"
            />
            <img
              className=" sm:w-[2000px] lg:w-[2000px] rounded-md"
              src="https://ahobilamtemple.com/ahobilam/assets/images/Mask%20Group%2016.png"
            />
          </div>
        </div>
        <button
          id="prev"
          className="absolute top-1/2 left-10 -translate-y-1/2 px-4 py-2"
        >
          <img
            className="sm:w-8 lg:w-8 w-5 rounded-lg"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8BAAIAAAD4+Pjq6ury8vLU1NT19fXNzc0SEhPJycn7+/tGRkbu7u7i4uLn5+chICFeXl44ODiIiImtra3AwMB9fX64uLiRkZEqKSpmZmaYmJhtbG1NTU2fn6CxsbHb29svLy91dXY2NjZUVFUYFxiCgoNBQEEtLS1eXl9JK4DyAAAEfklEQVR4nO2d21YiQQxFQ3HpRhABBQUZbW4q//+Do6NL5dTLPBQrix3OFySr0t1Vu09SZmepejLez3veUZxO3V36p2fvQE6lepxS610pjbxDOY0eP/P7SHHlHcspVE2+E2ylqXc0J1Bv8Z3fe4Zr73DK6yn9SrCVDt7xlFZ7eZxgmnlHVFjNQhK89Y6osO6O8ntP8ME7osLayAKmK++IymqkFTrseodUVvdaobRHcK4VCnuJdqaS4LTjHVJZzZIkOPeOqLBu9RG8946orLpDWcAF7MR0pRW68Y6osB60Qu+8IyqraqcV2niHVFZ1XxJctr1DKqtHrdAn74jKqjpIggsYO+zpRnsC22g/aYU+ekdUVgIrWmlce4dUVs1aFnAHq1A6rBisJME+DFY0W3mH/rn2Dqmsni+w4rw10gp9hVXoTCv0xTuiwrrVCoXBiutXSXB74x1SWcWDFTALQvVHFnDceIdUVrVWKM1+kMEKGE5rK04b02CF4rQDDKdlsAKG0/iwQnEaEFYcJwiDFW2FFXsarND/1kBYgTY3DTZSoS0arNCj4BDmrMi8PzRY8aIJwir0JoMVsArNcNp84B1SWWU4DQYrMpz2hsdpsAp90AqFwYrM+0PDaT2t0CWsQumwYnCQBezDcFoTDqfBvD94Z8XoTWEFHafRYUUfdhSMACuOE6TBijkdVmgbyCvsKJg1KtGcFfRGpY46K9a8RqXjBdzANtr0RqWuViitla7uywKuYBUazvuzb7xDKqvc+1N5h1RWdJxmOlUl0bw/e/X+wCqU3qiUTVVp0XDaWmEF3ftzgRXnpcxZgYcVl6kq56UMVmxhR8HMWUFrA8kqlOb9yaaqwCq0bmmFXmDFWamL9/7sZQGXsKMgHVbgvT+9seI0nrPiuEJh3p8cp9FghVYozfuTTVVh4zQerDAdDpdgHwkLsIYBnsMA71Ljfw8twJ4mwL40wNnC+OdDC3DGD8BpjM/aLAAvDcC8jf/fwgL8ewrw/9D4/4AtwH/8AF4M4/tpLIAnKoCvzfjeRAvgLw3gETa+z9ti4A16v0WAnhmLgTfovWsB+g+N30NqAfqAA/RyW0y8QZupEGAuhoXAG/j5NAFmDAWYE2X8WV8WYF5bgJl7xp+baAFmX158RhDh5wgHmAVt/HneFmAme4C5+sa/G8EC3G8R4I4S498zYwHuCoqJN2h3dhn/3jULcHdegPsPjX+HpQW4hzTAXbIWA2/wQRz+Xm6L4TPiN6dU6t7Ag7gYbVQ890YG4rYBQBzSZ3T8MALxxlZ9RrhDo/iMEhHEZVNigHhDK5WHNyK4NyK0Ua0lxQveOEcF8Bn1FMRNcJVa6Ri8RQC8wQNxtYK4JQ7EZT6jReMdUnHFaKOi442uNqcAG/4itlHxpsR09J/4FOfeiIA3Mp8RD2+MdCs+xG3FsykxEYbgAvGGVirvYWzrlBjeK1XwRjp4x3MC9Ra/Ukxr73BOoWrys4xp6h3NafSDN4Cmhk/V4/T1puGdpL70Ma75Qzw29aPZrt9f/R9f/AsfS0cDZbNItAAAAABJRU5ErkJggg=="
          />
        </button>
        <button
          id="next"
          className="absolute top-1/2 right-10 sm:right-10 lg:right-10 -translate-y-1/2 px-4 py-2"
        >
          <img
            className="sm:w-8 lg:w-8 w-5 rounded-lg"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAD8/PzExMTg4ODy8vL5+fl2dnba2tr19fW5ubnv7+/BwcHT09NLS0vl5eUuLi6WlpaNjY2fn5+wsLBFRUVUVFQVFRVsbGw0NDRzc3MNDQ3q6urMzMxZWVk7OzsdHR2FhYVhYWElJSWysrKSkpKJiYl+fn6mpqZAQECcnJwoKCgRERFQUFAe2rB9AAAEsUlEQVR4nO2d2VIqQRAFmZFFYBAY9lU2ZdP//70rhuHVIR/b6DDxPPpUFdpO5emq6lKpoLQ/WU1O8+KPPWp2knfl9diR/JQekg+t+rFD+Rm1kv86tmJH8xPqJl81Fh7HU/Jd3WrsiEKrX8gw2TZihxRYaTHDJBncxw4qrHbXKSa1ZuyogiqDFJNe7KiCql6DFDt3scMKqvIQchyWY4cVVNkZclxXYocVUtXih/Gi0SF2WEHVHEOOk0XssIKq9QA5jtuxwwqqxghyzFWFXDWn4+gq5OYbyPHRxVWLI+Q4dXHVFXBc1E1jhxVS1T0dxyx2WEHVXkKODy6uyiaQ415VyKUHSHEm46op5Lh1FXL3xFUbF1c1tpDjWmWQV7uQ4shlkFeIqzquQu4WuGo3gxxzVyF3q1w1cB1H5KraDXDVKXZUQcVcJTPIiauGMq7qQI4urir1IMWZyyDH+6qVjKteIUcbV60gx2eVQZ4SV81cXDUnrrIZ5APIceriKizknmJHFVTpMx1HF1e1iatkBvkCDXJX4xEZ5LfAVSsZV5FBvnQVcpnfIL/qyH2Xi6uaxFWyxqN7Msg3rkKuQX+qeeyowuqJctzFjiqo2sRVMoO89Qg53kLjkayQI66S3VeViatkBvmCCrm9q5Ajg1xWyFWIq2QDHdh4ZOMq6nRYqzodSmSQJzKDnLjq6OKqFhnkG1ch1/A3HpWo8chmkBNXvbq4akGdDlNXp0OfjuNJdRzra0jx7BroQK5ayriKRgH3qk6HUo+Oo4urmsRVExlX3YBBnr1AjmvXcUSuchnkc5qvGsi4igzysavTYUfH8Ul1HHGgY/XHVb9NzFUug/xAx7Gn4qrKGlLsyLjqBgzyO7yvUn05buG+ChuPHmVcRaOANoPcP9CBg/IvMq7CxqM/rvpt2pHr6NokWyeuOsu4igzyV5lBTgMdNdd91YEMchdXNdeQoswgL5NBPo0dVVjRoLwsxRS4ygXHb8fxyiB3LVi7qDgmt48dUGDZf4f6c2j/X2r/HuprGntdamcLOx/qGd/u09i9Nrtfqve87fcW9rsn/f2h/Q7Yfo9v78XQ99PYe6LsfW323kR9f6m9R1jPSPZeffu8hX1mxj73pJ9ds88f2mdI7XPA+llu+zy+faeCnZH0u03s+2nsO4b0e6Lsu77s+9rsO/f0exPt90j2/aX2HbT6PcL2XdD2fd76nez2vfr2txH0Nrb9jRL7OzP2t4LsrT76N7vs767Z386zv3+of8PS/g6p/S1Z+3vA+jed9eMQ8rfV68RIKxEjkY09MzESdRrsPZ0G5SXkZ7KxiZFGIkay29gLGpireWzsOTGSyMbGcQjTPdLO3upDNvbYw0gVYqSO6AASI41MjCS3sbHVx8RINI+09TBSSjb2TLQ6LEMb28NIbWIkkY3NjGQah4D8kq6nRENGErX6ICOJbGw9IzVoYC732Nh2RmoSI4lafarU6jMy2dhnSHDtKdGw1WcoYiS6RzKNQ2SQn2q98g7yq3lafd4w9zq/gYeRLrrCiK2oRHtX8TMo2nz6oe9m6NjDSJ9qfcnv6GGkr/rE3ZXIxv6m+YennXts7KLqvUlyzkUH8B9LHVODINqUgAAAAABJRU5ErkJggg=="
          />
        </button>
      </div>
      <div className="lg:mt-20 lg:ml-20 lg:mb-[-20px]">
        <div className="text-amber-950 ml-5 sm:text-3xl lg:text-5xl text-2xl sm:ml-10 mt-5 mb-5">
          Ustavams and auspicious days
        </div>
        <div className="flex sm:mb-10">
          <div>
            <div className="mb-3 ml-5 text-amber-800 text-2xl lg:text-4xl sm:mt-5 sm:ml-10">
              Swati Festival
            </div>
            <div className="text-slate-600 text-sm lg:text-xl ml-5 sm:mt-5 sm:ml-10">
              Swati is the avatara star (nakshatra) of Sri Lakshmi Narasimhan.
              This day every month is celebrated with great devotion and is
              witnessed by a large number of devotees. Worship of Sri Ahobilam
              Narasimha on Swati days would confer on the devotee blessings for
              fulfillment of all desires and accomplishment of all auspicious
              deeds
            </div>
          </div>

          <div>
            <img
              className="sm:w-[4000px] sm:ml-10 lg:ml-12 lg:mt-10 ml-2 mt-24 lg:w-[4000px] w-[3000px] sm:mt-20"
              src="https://ahobilamtemple.com/ahobilam/assets/images/Image%20121.png"
            />
          </div>
        </div>
      </div>
      <div className="flex sm:mb-10">
        <div className="lg:mt-20 lg:ml-24 lg:mr-20">
          <div className="text-amber-950 text-3xl lg:text-5xl lg:ml-10 ml-5 mt-5 mb-3 sm:ml-10">
            How to reach Ahobilam
          </div>
          <div className="text-slate-600 sm:mt-5 lg:text-xl  ml-5 sm:ml-10">
            The primary access point to Ahobilam is through the town of
            Allagadda. Nearest connectivity routes are given below
          </div>
          <div className="text-slate-600  sm:mt-5 lg:text-xl  ml-5 sm:ml-10">
            Click on your preferred mode of transport to view about the nearest
            hubs.
          </div>
        </div>
        <div>
          <img
            className="sm:w-[300px] lg:mr-36 lg:w-[500px] w-96 mr-10 sm:mr-10 ml-5 mt-24 sm:mt-10 lg:mt-[70px]"
            src="https://ahobilamtemple.com/ahobilam/assets/images/routes/bus-route.png"
          />
        </div>
      </div>
      <div className="flex bg-slate-100 p-2 mb:10">
        <div>
          <div className="sm:text-4xl lg:text-5xl text-3xl mb-20 ml-0 sm:ml-10 lg:ml-20 text-amber-950">
            Panchangam
          </div>
          <img
            className="sm:w-96 lg:w-[700px] sm:mr-10 lg:mr-10 ml-1 w-[200px] sm:mt-20 lg:mt-[100px]"
            src="https://ahobilamtemple.com/ahobilam/assets/images/Image%20122.png"
          />
        </div>
        <div className="sm:ml-5 lg:text-xl text-left sm:mr-10 lg:mr-28 p-10 lg:p-36">
          <button className="border-black bg-slate-200  sm:p-8 lg:p-10 p-3 rounded-lg">
            <div className="flex">
              <div className="text-xl">Date:</div>
              <div className="text-left ml-8 sm:ml-4 lg:ml-14">
                {dateTime.date}
              </div>
            </div>
            <div className="flex">
              <div className="text-xl sm:mr-5 mr-8 lg:mr-14 text-amber-950">
                Time:
              </div>
              <div>{dateTime.time}</div>
            </div>
            <div className="flex">
              <div className="text-xl mr-10  text-amber-950">Day:</div>
              <div className="lg:ml-12">{dateTime.day}</div>
            </div>
            <div className="flex">
              <div className="text-xl text-amber-950">Tithi:</div>
              <div className="sm:ml-3 ml-10 text-left lg:ml-14">
                {panchangam.tithi}
              </div>
            </div>
            <div className="flex">
              <div className="text-xl mr-5 text-amber-950">Paksha:</div>
              <div className="lg:ml-7">{panchangam.paksha}</div>
            </div>
            <div className="flex">
              <div className="text-xl mr-8 text-amber-950">Masa:</div>
              <div className="lg:ml-12">{panchangam.masa}</div>
            </div>
            <div className="flex">
              <div className="text-xl sm:mr-5 lg:mr-5 mr-2 text-amber-950">
                Nakshatra:
              </div>
              <div>{panchangam.nakshatra}</div>
            </div>
          </button>
        </div>
      </div>

      <div>
        <div className="sm:ml-14 text-3xl ml-10 mt-10 mb-5 lg:ml-20 lg:text-center text-amber-950 lg:5xl sm:text-4xl">
          Nava Narasimha Kshetram
        </div>
        <img
          className="w-96 ml-10 sm:ml-20 sm:mb-10 lg:mr-16 sm:mt-10 rounded-lg lg:ml-[400px] lg:w-[600px]"
          src="https://templeyatri.in/wp-content/uploads/2024/07/Ahobilam-Map.jpg"
        />
      </div>
    </div>
  );
}

export default Main;
