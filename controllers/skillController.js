const express = require("express");

const router = express.Router();
const Skill = require("../models/skill");

//  createSkill

router.post("/create/skill", async (req, res) => {
try{
// const skill = new Skill(req.body); ´+ save
const saveSkill = await Skill.create(req.body); // without save
res.status(201).json(saveSkill);
} catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// getAllSkills 

router.get("/skills", async (req, res)=>{
try{    
    const getSkills = await Skill.find();
    res.status(200).json(getSkills);
}catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  getSkillById

router.get("/skill/:id", async (req, res) => {
try {
    const skills = await Skill.findById(req.params.id);
    if (!skills) return res.status(404).json("Skill not found");

    res.json(skills);
} catch (err) {
    res.status(400).json(err.message);
  }
});

// updateSkill

router.put("/update/skill/:id", async (req, res) => {
try{ 
     const skill = await Skill.findByIdAndUpdate(req.params.id, req.body,{new:true});
     if (!skill) return res.status(404).json("skill not found");
     res.json(skill);
} catch (error){res.status(400).json("error.message");}
})

// deleteSkill

router.delete("/delete/skill/:id", async (req,res) => {
try{
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json("skill not found");
    res.json("skill deleted");
} catch (error){
    res.status(400).json("error.message")
}
})

module.exports = router;