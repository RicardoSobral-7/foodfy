const Foodfy = require("../models/foodfy");

module.exports = {
    index(req,res){
        const {filter} = req.query;
        if(filter){
            Foodfy.findBy(filter, function(recipes){
                return res.render("home/search",{recipes, filter});
            });
        }else{
            Foodfy.all(function(recipes){
                return res.render("home/index", {recipes});
            });
        }
    },
    about(req,res){
        return res.render("home/about");
    },
    show(req,res){
            Foodfy.all(function(recipes){
                return res.render("home/recipes", {recipes});
            });
    },
    chefs(req,res){
        Foodfy.allChefs(function(chefs){
            return res.render("home/chefs", {chefs});
        })
    },
    search(req,res){
        const {filter} = req.query;
        Foodfy.findBy(filter, function(recipes){
            return res.render("home/search",{recipes, filter});
        });
    },
    recipe(req,res){
        const {id} = req.params;
        Foodfy.find(id,function(recipe){

            return res.render("home/recipe", {recipes: recipe});
        })
    }

}

// exports.show = (req,res)=>{
//     return res.render("home/recipes", {recipes:data.recipes});
// }

// exports.recipes = function (req, res) {
//     const {id} = req.params;

// 
  
//     return res.render("home/recipe", {recipes: recipe});
// }