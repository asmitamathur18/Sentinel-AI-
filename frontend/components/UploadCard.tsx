"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function UploadCard() {

    const [file,setFile]=useState<File|null>(null);

    const uploadImage=async()=>{

        if(!file)return;

        const formData=new FormData();

        formData.append("file",file);

        const response=await api.post(

            "/detect",

            formData,

            {

                headers:{

                    "Content-Type":"multipart/form-data"

                }

            }

        );

        console.log(response.data);

    };

    return(

        <div className="bg-slate-900 rounded-2xl p-8">

            <h2 className="text-2xl font-semibold">

                Upload Image

            </h2>

            <input

                type="file"

                className="mt-6"

                onChange={(e)=>{

                    if(e.target.files){

                        setFile(e.target.files[0]);

                    }

                }}

            />

            <button

                onClick={uploadImage}

                className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"

            >

                Detect Objects

            </button>

        </div>

    );

}