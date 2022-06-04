const express = require('express');
const router = express.Router();
 

   router.get('/movies', function (req, res) {
    let movieList =
    ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

       res.send(movieList);
   })


   router.get('/movies/:indexNumber', function (req, res) {
    let movieList =
    ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    for (i=0;i=movieList.length;i++){
        let i=req.params.indexNumber;
        if(i>movieList.length){
            res.send('No movie at this index number')
        }
        else{
            res.send(movieList[i]);

        }
    }
   })

   
   router.get('/films', function (req, res) {
    let filmList =
    [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       res.send(filmList);
    })
       



   router.get('/films/:filmId', function (req, res) {
    let filmList =
    [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       
            for (i=0;i=filmList.length;i++){
                let i=req.params.filmId-1;
                if(i>filmList.length){
                    res.send('No movie exists with this id');
                }
                
                else{
                    res.send(filmList[i]);
                }
            }
       
   })


  
module.exports = router;