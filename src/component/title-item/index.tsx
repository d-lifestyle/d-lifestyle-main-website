import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export interface TitleItemProps {
  title: string
  path?: string
}

export const TitleItem: FC<TitleItemProps> = ({ path, title }) => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between  px-5">
      <h6 className="text-xl text-primary-500 uppercase text-center">Our {title}</h6>
      {path?.length !== 0 && (
        <button
          className="bg-primary-500 text-center  px-10 py-2 rounded"
          type="button"
          onClick={() => {
            navigate(path ? path : "");
          }}
        >
          <span className="text-white capitalize">more</span>
        </button>
      )}
    </div>
  )
}
