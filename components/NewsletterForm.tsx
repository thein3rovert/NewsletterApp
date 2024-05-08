"use client";

import{EnvelopeIcon} from "@heroicons/react/24/outline"; //Import the envelope icon to be used
import { FormEvent, useRef, useState } from "react";
import { gsap } from "gsap";
import { getPlaneKeyframes } from "../lib/getPlaneKeyframes";
import { getTrailsKeyframes } from "@/lib/getTrailsKeyframes";


/**
 * Renders a newsletter form component.
 * 
 * This function initializes the state for the input field and the active state.
 * It also creates a reference to the button element using the `useRef` hook.
 * 
 * @returns {JSX.Element} The rendered newsletter form component.
 */
function NewsletterForm(): JSX.Element {
  // State for the input field
  const [input, setInput] = useState<string>("");

  // State for the active state
  const [active, setActive] = useState<boolean>(false);

  // Reference to the button element
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Destructuring the `to`, `fromTo`, and `set` functions from the `gsap` object
    const {to, fromTo, set} = gsap


  // This helps to handle the form submission
    // This function handles the form submission
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
  e.preventDefault(); // Prevents the default form submission behavior, which was reloading the page

  const email = input; // Retrieves the email input
  const button = buttonRef.current; // Retrieves the button element

  if (!email || !button) return; // Checks if email and button exist
  if (!active) {
    setActive(true); // Sets active state to true
    to(button, {
      keyframes: getPlaneKeyframes(set, fromTo, button, setActive, setInput), // Triggers an animation using gsap
    });

    // Second Animation using to gsap 
    to(button, { keyframes: getTrailsKeyframes (button) });
  }

  };


  return (
  <div className="flex flex-col space-y-8 md:w-[400px]">
    <form 
      onSubmit={handleSubmit} className ="newsletter-form mt-10 animate-fade-in-3" 
      >   
      <div className="group flex items-center gap-x-4 py-1 pl-4 pr-1
      rounded-[9px] bg-[#090d11] hover:bg-[#7c7b83] showdow-outline-gray hover:shadow-transparent focus-within:bg-[#15141B]
      focus-within:!shadow-outline-gray-focus transition-all duration-300">
            {/* Styling the envelop icon*/}
      <EnvelopeIcon className= "hidden sm:inline w-6 h-6 text-[#7c7b83] group-focus-within:text-white group-hover:text-white transition-colors duration-300" >

      </EnvelopeIcon>

      <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Email address"
            required
            type="email"
            className="flex-1 text-white text-sm sm:text-base outline-none placeholder-[#4B4C52] group-focus-within:placeholder-white bg-transparent placeholder:transition-colors placeholder:duration-300"
            /> 
          {/* Styling the inpout field */}

          <button
            ref={buttonRef}
            disabled={!input}
            type="submit"
            className={`${
              active && "active"
            } disabled:!bg-[#17141F] disabled:grayscale-[65%] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}
          >
            <span className="default"> Subscribe</span>
            <span className="success">  
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Done
            </span>
            <svg className="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className="plane">
              <div className="left"></div>
              <div className="right"></div>
            </div>
        </button>
    </div>
    </form>
  </div>
  );
}
export default NewsletterForm

