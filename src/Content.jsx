import { Signup } from "./Signup";
import { Login } from "./Login";
import { Header } from "./Header";
import { JournalIndex } from "./JournalIndex";
import { ProfileShow } from "./ProfileShow";
import { EditSkill } from "./EditSkill";
import { NewSkill } from "./NewSkill";

import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [skills, setSkills] = useState([]);

  const handleIndexSkills = () => {
    axios.get(`http://localhost:3000/skills.json`).then((response) => {
      setSkills(response.data);
    });
  };

  useEffect(handleIndexSkills, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<JournalIndex skills={skills} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<ProfileShow />} />
          <Route path="/edit/:id" element={<EditSkill />} />
          <Route path="/new/:id" element={<NewSkill />} />
        </Routes>
      </div>
    </div>
  );
}
