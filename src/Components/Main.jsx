import React, { useState, useEffect } from "react";

function Main() {
  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
    day: "",
  });
  const Panchangam = ({ dateTime, panchangam }) => (
    <button className="bg-slate-300 bg-cover mb-10">
      <div className=" text-4xl p-5 text-amber-950">Panchangam</div>
      <div className="flex">
        <div>
          <img
            className="w-96 lg:w-[700px] mt-10 lg:mt-32 lg:ml-28 lg:mr-20"
            src="https://ahobilamtemple.com/ahobilam/assets/images/Image%20122.png"
          />
        </div>
        <div className="sm:ml-5 lg:text-xl text-left sm:mr-10 lg:mr-28 p-10 lg:p-36">
          <button className="border-black bg-white p-4 rounded-lg">
            <div>{`Date: ${dateTime.date}`}</div>
            <div>{`Time: ${dateTime.time}`}</div>
            <div>{`Day: ${dateTime.day}`}</div>
            <div>{`Tithi: ${panchangam.tithi}`}</div>
            <div>{`Paksha: ${panchangam.paksha}`}</div>
            <div>{`Masa: ${panchangam.masa}`}</div>
            <div>{`Nakshatra: ${panchangam.nakshatra}`}</div>
          </button>
        </div>
      </div>
    </button>
  );
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
      currentIndex = (currentIndex - 1 + images.length) % images.length;
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
          <div className="text-7xl sm:mt-5 lg:mt-28 text-amber-950 sm:ml-8">
            Ahobilam
          </div>
          <div className="text-6xl leading-tight sm:mt-5 sm:ml-8">
            Spiritual Adobe of Nava Narasimhas
          </div>
          <div className="sm:mt-5 lg:mt-10 text-[20px] sm:ml-10 lg:ml-10">
            Welcome to Ahobilam, the sacred site where Lord Narasimha vanquished
            Hiranyakashipu, ensuring the protection of Prahalada. Goddess
            Mahalakshmi, took the form of Chenchu Lakshmi, united with the Lord
            and married him among the Chenchu, a tribe of hunters dwelling in
            the hills and united with lot.
          </div>
        </div>
        <div>
          <img
            className="sm:w-[3000px] lg:mt-48 sm:mr-20 lg:mr-10 lg:w-[2000px] sm:mt-96 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVJqIz3wJe7377B-abKDTB35gP5k_DX7Tqg&s"
          />
        </div>
      </div>
      <div className="relative bg-slate-500 w-full max-w-lg mx-auto lg:mb-20 sm:mb-10">
        <div className="overflow-hidden">
          <div id="carousel" className="flex transition-transform duration-500">
            <img
              className="object-cover w-full ml:10 mr-10 rounded-md"
              src="https://ahobilamtemple.com/ahobilam/assets/images/temple-1.jpg"
            />
            <img src="https://ahobilamtemple.com/ahobilam/assets/images/MicrosoftTeams-image%20(37).png" />
            <img src="https://ahobilamtemple.com/ahobilam/assets/images/Mask%20Group%2016.png" />
          </div>
        </div>
        <button
          id="prev"
          className="absolute top-1/2 left-2 -translate-y-1/2 px-4 py-2"
        >
          <img
            className="w-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8BAAIAAAD4+Pjq6ury8vLU1NT19fXNzc0SEhPJycn7+/tGRkbu7u7i4uLn5+chICFeXl44ODiIiImtra3AwMB9fX64uLiRkZEqKSpmZmaYmJhtbG1NTU2fn6CxsbHb29svLy91dXY2NjZUVFUYFxiCgoNBQEEtLS1eXl9JK4DyAAAEfklEQVR4nO2d21YiQQxFQ3HpRhABBQUZbW4q//+Do6NL5dTLPBQrix3OFySr0t1Vu09SZmepejLez3veUZxO3V36p2fvQE6lepxS610pjbxDOY0eP/P7SHHlHcspVE2+E2ylqXc0J1Bv8Z3fe4Zr73DK6yn9SrCVDt7xlFZ7eZxgmnlHVFjNQhK89Y6osO6O8ntP8ME7osLayAKmK++IymqkFTrseodUVvdaobRHcK4VCnuJdqaS4LTjHVJZzZIkOPeOqLBu9RG8946orLpDWcAF7MR0pRW68Y6osB60Qu+8IyqraqcV2niHVFZ1XxJctr1DKqtHrdAn74jKqjpIggsYO+zpRnsC22g/aYU+ekdUVgIrWmlce4dUVs1aFnAHq1A6rBisJME+DFY0W3mH/rn2Dqmsni+w4rw10gp9hVXoTCv0xTuiwrrVCoXBiutXSXB74x1SWcWDFTALQvVHFnDceIdUVrVWKM1+kMEKGE5rK04b02CF4rQDDKdlsAKG0/iwQnEaEFYcJwiDFW2FFXsarND/1kBYgTY3DTZSoS0arNCj4BDmrMi8PzRY8aIJwir0JoMVsArNcNp84B1SWWU4DQYrMpz2hsdpsAp90AqFwYrM+0PDaT2t0CWsQumwYnCQBezDcFoTDqfBvD94Z8XoTWEFHafRYUUfdhSMACuOE6TBijkdVmgbyCvsKJg1KtGcFfRGpY46K9a8RqXjBdzANtr0RqWuViitla7uywKuYBUazvuzb7xDKqvc+1N5h1RWdJxmOlUl0bw/e/X+wCqU3qiUTVVp0XDaWmEF3ftzgRXnpcxZgYcVl6kq56UMVmxhR8HMWUFrA8kqlOb9yaaqwCq0bmmFXmDFWamL9/7sZQGXsKMgHVbgvT+9seI0nrPiuEJh3p8cp9FghVYozfuTTVVh4zQerDAdDpdgHwkLsIYBnsMA71Ljfw8twJ4mwL40wNnC+OdDC3DGD8BpjM/aLAAvDcC8jf/fwgL8ewrw/9D4/4AtwH/8AF4M4/tpLIAnKoCvzfjeRAvgLw3gETa+z9ti4A16v0WAnhmLgTfovWsB+g+N30NqAfqAA/RyW0y8QZupEGAuhoXAG/j5NAFmDAWYE2X8WV8WYF5bgJl7xp+baAFmX158RhDh5wgHmAVt/HneFmAme4C5+sa/G8EC3G8R4I4S498zYwHuCoqJN2h3dhn/3jULcHdegPsPjX+HpQW4hzTAXbIWA2/wQRz+Xm6L4TPiN6dU6t7Ag7gYbVQ890YG4rYBQBzSZ3T8MALxxlZ9RrhDo/iMEhHEZVNigHhDK5WHNyK4NyK0Ua0lxQveOEcF8Bn1FMRNcJVa6Ri8RQC8wQNxtYK4JQ7EZT6jReMdUnHFaKOi442uNqcAG/4itlHxpsR09J/4FOfeiIA3Mp8RD2+MdCs+xG3FsykxEYbgAvGGVirvYWzrlBjeK1XwRjp4x3MC9Ra/Ukxr73BOoWrys4xp6h3NafSDN4Cmhk/V4/T1puGdpL70Ma75Qzw29aPZrt9f/R9f/AsfS0cDZbNItAAAAABJRU5ErkJggg=="
          />
        </button>
        <button
          id="next"
          className="absolute top-1/2 right-0 -translate-y-1/2 px-4 py-2"
        >
          <img
            className="w-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAD8/PzExMTg4ODy8vL5+fl2dnba2tr19fW5ubnv7+/BwcHT09NLS0vl5eUuLi6WlpaNjY2fn5+wsLBFRUVUVFQVFRVsbGw0NDRzc3MNDQ3q6urMzMxZWVk7OzsdHR2FhYVhYWElJSWysrKSkpKJiYl+fn6mpqZAQECcnJwoKCgRERFQUFAe2rB9AAAEsUlEQVR4nO2d2VIqQRAFmZFFYBAY9lU2ZdP//70rhuHVIR/b6DDxPPpUFdpO5emq6lKpoLQ/WU1O8+KPPWp2knfl9diR/JQekg+t+rFD+Rm1kv86tmJH8xPqJl81Fh7HU/Jd3WrsiEKrX8gw2TZihxRYaTHDJBncxw4qrHbXKSa1ZuyogiqDFJNe7KiCql6DFDt3scMKqvIQchyWY4cVVNkZclxXYocVUtXih/Gi0SF2WEHVHEOOk0XssIKq9QA5jtuxwwqqxghyzFWFXDWn4+gq5OYbyPHRxVWLI+Q4dXHVFXBc1E1jhxVS1T0dxyx2WEHVXkKODy6uyiaQ415VyKUHSHEm46op5Lh1FXL3xFUbF1c1tpDjWmWQV7uQ4shlkFeIqzquQu4WuGo3gxxzVyF3q1w1cB1H5KraDXDVKXZUQcVcJTPIiauGMq7qQI4urir1IMWZyyDH+6qVjKteIUcbV60gx2eVQZ4SV81cXDUnrrIZ5APIceriKizknmJHFVTpMx1HF1e1iatkBvkCDXJX4xEZ5LfAVSsZV5FBvnQVcpnfIL/qyH2Xi6uaxFWyxqN7Msg3rkKuQX+qeeyowuqJctzFjiqo2sRVMoO89Qg53kLjkayQI66S3VeViatkBvmCCrm9q5Ajg1xWyFWIq2QDHdh4ZOMq6nRYqzodSmSQJzKDnLjq6OKqFhnkG1ch1/A3HpWo8chmkBNXvbq4akGdDlNXp0OfjuNJdRzra0jx7BroQK5ayriKRgH3qk6HUo+Oo4urmsRVExlX3YBBnr1AjmvXcUSuchnkc5qvGsi4igzysavTYUfH8Ul1HHGgY/XHVb9NzFUug/xAx7Gn4qrKGlLsyLjqBgzyO7yvUn05buG+ChuPHmVcRaOANoPcP9CBg/IvMq7CxqM/rvpt2pHr6NokWyeuOsu4igzyV5lBTgMdNdd91YEMchdXNdeQoswgL5NBPo0dVVjRoLwsxRS4ygXHb8fxyiB3LVi7qDgmt48dUGDZf4f6c2j/X2r/HuprGntdamcLOx/qGd/u09i9Nrtfqve87fcW9rsn/f2h/Q7Yfo9v78XQ99PYe6LsfW323kR9f6m9R1jPSPZeffu8hX1mxj73pJ9ds88f2mdI7XPA+llu+zy+faeCnZH0u03s+2nsO4b0e6Lsu77s+9rsO/f0exPt90j2/aX2HbT6PcL2XdD2fd76nez2vfr2txH0Nrb9jRL7OzP2t4LsrT76N7vs767Z386zv3+of8PS/g6p/S1Z+3vA+jed9eMQ8rfV68RIKxEjkY09MzESdRrsPZ0G5SXkZ7KxiZFGIkay29gLGpireWzsOTGSyMbGcQjTPdLO3upDNvbYw0gVYqSO6AASI41MjCS3sbHVx8RINI+09TBSSjb2TLQ6LEMb28NIbWIkkY3NjGQah4D8kq6nRENGErX6ICOJbGw9IzVoYC732Nh2RmoSI4lafarU6jMy2dhnSHDtKdGw1WcoYiS6RzKNQ2SQn2q98g7yq3lafd4w9zq/gYeRLrrCiK2oRHtX8TMo2nz6oe9m6NjDSJ9qfcnv6GGkr/rE3ZXIxv6m+YennXts7KLqvUlyzkUH8B9LHVODINqUgAAAAABJRU5ErkJggg=="
          />
        </button>
      </div>
      <div className="flex sm:mb-10">
        <div className="lg:mt-20 lg:ml-20">
          <div className="text-amber-950 text-3xl sm:ml-10">
            Ustavams and auspicious days
          </div>
          <div className="text-amber-800 text-2xl sm:mt-5 sm:ml-10">
            Swati Festival
          </div>
          <div className="text-slate-600  sm:mt-5 sm:ml-10">
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
            className="sm:w-200 ml-10 sm:mt-20 lg:mt-[-70px]"
            src="https://ahobilamtemple.com/ahobilam/assets/images/Untitled_Artwork.png"
          />
        </div>
      </div>
      <div className="flex sm:mb-10">
        <div className="lg:mt-36 lg:ml-24 lg:mr-20">
          <div className="text-amber-950 text-3xl sm:ml-10">
            How to reach Ahobilam
          </div>
          <div className="text-slate-600 sm:mt-5 sm:ml-10">
            The primary access point to Ahobilam is through the town of
            Allagadda. Nearest connectivity routes are given below
          </div>
          <div className="text-slate-600  sm:mt-5 sm:ml-10">
            Click on your preferred mode of transport to view about the nearest
            hubs.
          </div>
        </div>
        <div>
          <img
            className="sm:w-200 lg:w-[500px] sm:mr-10 lg:mr-20 ml-10 sm:mt-10 lg:mt-[70px]"
            src="https://ahobilamtemple.com/ahobilam/assets/images/routes/bus-route.png"
          />
        </div>
      </div>

      <div>
        <div className="ml-14 lg:ml-20 lg:text-center text-amber-950 text-4xl">
          Nava Narasimha Kshetram
        </div>
        <img
          className="sm:ml-20 sm:mb-10 lg:mr-16 sm:mt-10 rounded-lg lg:ml-[400px] lg:w-[600px]"
          src="https://templeyatri.in/wp-content/uploads/2024/07/Ahobilam-Map.jpg"
        />
      </div>
    </div>
  );
}

export default Main;