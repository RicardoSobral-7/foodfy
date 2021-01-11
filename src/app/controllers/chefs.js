const Recipe = require("../models/chef");

module.exports = {
    index(req, res){
        Recipe.all(function(chefs){
            return res.render("admin/chefs/index", {chefs});
        });

    },
    
    create(req, res){
        return res.render("admin/chefs/create");
    },
    
    show(req,res){
        Recipe.find(req.params.id, function(chef){
            if(!chef) return res.send("Recipe not found!");
        Recipe.findRecipesChef(req.params.id, function(recipes){
            return res.render("./admin/chefs/show",{chef, recipes_chef: recipes});
        });
        });
    
    },
    
    edit(req,res){
        Recipe.find(req.params.id, function(chef){
            if(!chef) return res.send("Recipe not found!");
            return res.render("./admin/chefs/edit",{chef});
        
        });
    },
    
    post(req,res){
        const keys = Object.keys(req.body);
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Por favor Preencha todo os campos");
            }
        }
        Recipe.create(req.body, function(chef){
            return res.redirect(`/admin/chefs/${chef.id}`);
        });
    
    
    },
    
    put(req,res){
        const keys = Object.keys(req.body);
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Por favor Preencha todo os campos");
            }
        }
        Recipe.update(req.body, function(){
            return res.redirect(`/admin/chefs/${req.body.id}`);
        });
    },
    
    delete(req,res){
        Recipe.delete(req.body.id, function(){
            return res.redirect("/admin/chefs");
        })
        
    }

}
