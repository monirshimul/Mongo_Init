const mongoose = require('mongoose');


//Connecting to mongodb..........
mongoose.connect('mongodb://localhost/testdb')
.then(()=> console.log('Connected................') )
.catch(err => console.log('not connected............', err))


//creating schema........
const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tag : [String],
    date:{ type: Date, default: Date.now},
    isPublished: Boolean

});

//compile the schema into a model......to create a class...
const Course =  mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        name : 'Angular',
        author : 'Mosh',
        tag : ['js', 'frontend'],
        isPublished : true
    
    });
    
    const result = await course.save();
    console.log(result.tag[1]); 
}

createCourse();



