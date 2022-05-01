const Courses = require('../models/Courses')
const ApiError = require('../ApiError/ApiError')
const multer = require('multer');
const uuid = require('uuid')
const path = require('path')
const fs = require('fs');


class CoursesController {

  async create (req, res, next) {
    try{
      const {title, text, link, owner, category_id} = req.body

      console.log(text);


      const candi = await Courses.findOne({title})

      if(candi) {
        return res.status(201).json({message: `${title} ужа существует`})
      }

      const { img } = req.files;

      if (img) {
        let fileName = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const obj = new Courses({title, text, link, owner, category_id, image_path: fileName})
        await obj.save()
      }else{
        const obj = new Courses({title, text, link, owner, category_id})
        await obj.save()
      }

      

      return res.status(201).json({message: "Successfuly created!"})


    }catch (e){
      console.log(e.message);
      return next(ApiError.badRequest('Что-то пошло не так')) 
    }
  }
  

  async getAll (req, res, next) {
    try{
      const news = await Courses.find()      
      res.status(201).json(news)
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async update (req, res, next) {
    try{
      const { title, text, link,  } = req.body
      console.log(title);
      const {id} = req.params
      const condi = await Courses.findOne({title})

      if(condi) {
        return res.status(201).json({message: `${name} ужа существует`})
      }

      const {img} = req.files

      if(img){
        const old = await Courses.findOne({ id });
          if (old.image_path) {
            fs.unlinkSync(`./static/${old.image_path}`);
          }
          let fileName = uuid.v4() + '.jpg';
          img.mv(path.resolve(__dirname, '..', 'static', fileName));
          const course = await Courses.findByIdAndUpdate(
            id,{title, text, link, image_path: fileName}
            )
      }else{
        const course = await Courses.findByIdAndUpdate(
          id,{title, text, link}
          )
      }

      
      res.status(201).json({message: 'Updated successfully!'})
    }catch (e){
      console.log(e.message);
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async delete (req, res, next) {
    try{
      const {id} = req.params
      const news = await Courses.findByIdAndDelete(
        req.params.id
      )    
      res.status(201).json({message: 'Deleted successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }



}

module.exports = new CoursesController()