import React from "react";
import { Button } from "./Button"
import { Dropdown } from "./Dropdown"
import { CardVideo } from "./CardVideo"

const Main = () => {
  return (
    <div className='flex flex-col max-w-[1150px] py-14 lg:py-24 mx-auto px-4'>
        <div className='flex flex-wrap justify-center lg:justify-between'>
            <div className='flex justify-center flex-wrap gap-2'>
                <Button content="Agências" />
                <Button content="Chatbot" />
                <Button content="Marketing Digital" />
                <Button content="Geração de Leads" />
                <Button content="Mídia Paga" />
            </div>
            <div className="mt-6 lg:mt-2 xl:mt-0">
                <Dropdown />
            </div>
        </div>

        <div className="flex justify-center px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 border-b-2 border-t-2 border-gray-300 pt-16 pb-20">
                <CardVideo />
                <CardVideo />
                <CardVideo />
                <CardVideo />
                <CardVideo />
            </div>
        </div>
    </div>
)
};

export default Main;




