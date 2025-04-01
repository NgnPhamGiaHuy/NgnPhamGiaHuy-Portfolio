import React from "react";
import { TestimonialItem } from "@/components";

const TestimonialList = () => {
    return (
        <ul>
            <TestimonialItem authorName={"NgnPhamGiaHuy"} authorRole={"Developer"} authorImage={"/author.png"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper hendrerit egestas. Curabitur convallis lectus lorem, eget hendrerit augue malesuada quis. Maecenas consectetur justo vitae dui bibendum, vel ultricies eros elementum. Duis hendrerit magna nec interdum vulputate. Nunc ut fermentum turpis. Suspendisse orci ipsum, maximus at risus quis, malesuada facilisis diam. Ut suscipit, velit non eleifend eleifend, purus justo dapibus neque, lacinia pellentesque nisi sapien eu ante. Integer rutrum commodo mattis. Ut ornare quam mollis augue tincidunt ornare. Ut dapibus bibendum quam in efficitur.
            </TestimonialItem>
        </ul>
    );
};

export default TestimonialList;