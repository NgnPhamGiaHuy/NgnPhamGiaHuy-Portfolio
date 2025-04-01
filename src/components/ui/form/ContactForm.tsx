"use client"

import ReCAPTCHA from "react-google-recaptcha";
import React, { useCallback, useState } from "react";

import { Button, Input } from "@/components";

const ContactForm: React.FC = () => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    const handleCaptchaChange = useCallback((value: string | null) => {
        setCaptchaValue(value);
    }, []);

    const handleSubmit = useCallback((event: React.FormEvent) => {
        if (!captchaValue) {
            event.preventDefault();
            alert("Please complete the ReCAPTCHA before submitting.");
        }
    }, [captchaValue]);

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className={"flex flex-wrap -mx-3"}>
                    <Input id={"name"} label={"Your Full Name"} placeholder={"Full name..."} width={"half"} />
                    <Input id={"email"} label={"Your Email Address"} placeholder={"Enter your Email..."} width={"half"} />
                    <Input id={"subject"} label={"Your Subjects"} placeholder={"Subject..."} />
                    <Input id={"message"} label={"Your Message"} placeholder={"Write a message..."} isTextarea={true} />
                </div>
                <div className={"pt-6 flex flex-row items-center gap-2"}>
                    <input type="checkbox" id={"confirm"} />
                    <span>
                        <label htmlFor={"confirm"} className={"text-base text-text font-medium font-montserrat leading-tight cursor-pointer"}>
                            Accept the terms and conditions
                        </label>
                    </span>
                </div>
                <div className="mt-4 w-76 h-19.5">
                    <ReCAPTCHA sitekey={siteKey!} onChange={handleCaptchaChange}/>
                </div>
                <div className={"mt-8"}>
                    <Button color={"secondary"} size={"md"} disabled={!captchaValue}>
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;