import { styles } from "@/app/styles/styles";
import { AddCircleOutline } from "@mui/icons-material";
import React, { FC } from "react";
import toast from "react-hot-toast";

type Props = {
  benifits: { title: string }[];
  setBenifits: (benifits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  benifits,
  setBenifits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}) => {
  const handleBenifitChange = (index: number, value: any) => {
    const updatedBenifits = [...benifits];
    updatedBenifits[index].title = value;
    setBenifits(updatedBenifits);
  };

  const handleAddBenifit = () => {
    setBenifits([...benifits, { title: "" }]);
  };

  const handlePrerequisiteChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);
  };

  const handleAddPrerequisite = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benifits[benifits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the all fileds for goto next");
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label htmlFor="benifit" className={`${styles.label} text-[20px]`}>
          01. What are the benefits for students in this course?
        </label>
        {benifits.map((benifit: any, index: number) => (
          <input
            type="text"
            name="benifit"
            id="benifit"
            key={index}
            required
            placeholder="You will be able to build a fullstack LMS platform"
            className={`${styles.input} my-2`}
            value={benifit.title}
            onChange={(e) => handleBenifitChange(index, e.target.value)}
          />
        ))}
        <AddCircleOutline
          style={{
            margin: "10px 0px",
            cursor: "pointer",
            width: "30px",
            color: "lightgreen",
          }}
          onClick={handleAddBenifit}
        />
      </div>

      <div>
        <label htmlFor="prerequisite" className={`${styles.label} text-[20px]`}>
          02. What are the prerequisites for starting this course?
        </label>
        {prerequisites.map((prerequisite: any, index: number) => (
          <input
            type="text"
            name="prerequisite"
            id="prerequisite"
            key={index}
            required
            placeholder="You need basic knowledge of MERN stack"
            className={`${styles.input} my-2`}
            value={prerequisite.title}
            onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
          />
        ))}
        <AddCircleOutline
          style={{
            margin: "10px 0px",
            cursor: "pointer",
            width: "30px",
            color: "lightgreen",
          }}
          onClick={handleAddPrerequisite}
        />
      </div>

      <div className="flex justify-between">
        <button
          className={`${styles.button} w-56 text-white text-sm`}
          onClick={prevButton}
        >
          Previous
        </button>
        <button
          onClick={handleOptions}
          className={`${styles.button} w-56 text-white text-sm`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseData;
