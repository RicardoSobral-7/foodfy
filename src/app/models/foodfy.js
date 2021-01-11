const db = require("../../config/db");

module.exports = {
    all(callback){
        db.query(`
            SELECT recipes.*, chefs.name AS chefs_name 
            FROM recipes  
            LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
            ORDER BY title ASC
            LIMIT 6
            `, function(err, results){
                if(err) throw `Database Error ${err}`;
                callback(results.rows);
            });
    },
    find(id, callback){
        db.query(`SELECT recipes.*, chefs.name AS chefs_name
                    FROM recipes
                    LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
                    WHERE recipes.id = $1`,[id], function(err, results){
            if(err) throw  `Database Error ${err}`;
            callback(results.rows[0]);
        });
    },
    allChefs(callback){
        const query = `
        SELECT chefs.*, count(recipes.*)  AS total_recipes
        FROM chefs
        LEFT JOIN recipes ON(chefs.id = recipes.chef_id)
        GROUP BY chefs.id
        ORDER BY chefs.name
        `;
        db.query(query, function(err,results){
            if(err) throw  `Database Error ${err}`;
            callback(results.rows);
        })
    },
    findBy(filter, callback){
        const query = `
        SELECT recipes.*, chefs.name AS chefs_name 
        FROM recipes
        LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
        WHERE recipes.title ILIKE'%${filter}%'
        ORDER BY recipes ASC
        `
        db.query(query,function(err, results){
            if(err) throw  `Database Error ${err}`;
            if(results.rows == undefined){
                callback(0);
            }else{
                callback(results.rows);
            }
        });
    }
}