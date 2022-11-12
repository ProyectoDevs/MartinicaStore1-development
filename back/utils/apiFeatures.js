class APIFeatures{
    constructor(query, queryStr){
<<<<<<< HEAD
    this.query=query;
    this.queryStr=queryStr
}
=======
        this.query=query;
        this.queryStr=queryStr;
    }
>>>>>>> jules

search(){
    const keyword= this.queryStr.keyword ? {
        nombre:{
            $regex:this.queryStr.keyword,
            $options:'i'
        }
    }:{}

<<<<<<< HEAD
    this.query= this.query.find({...keyword});
=======
    this.query = this.query.find({...keyword});
>>>>>>> jules
    return this
}

filter(){
<<<<<<< HEAD
    const queryCopy = { ...this.queryStr};

    //eliminemos los campos que vienen de otras consultas
    const removeFields= ["keyword", "limit", "page"]
    removeFields.forEach(el => delete queryCopy[el])

    //Filtro avanzado para precio
    let queryStr= JSON.stringify(queryCopy)
=======
    const queryCopy = {...this.queryStr};

    //Eliminar los campos que vienen de otras consultas
    const removeFields=["keyword", "limit", "page"]
    removeFields.forEach(elem=> delete queryCopy[elem])

    //Filtro para precio
    let queryStr = JSON.stringify(queryCopy)
>>>>>>> jules
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match =>
    `$${match}`)

    this.query= this.query.find(JSON.parse(queryStr))
    return this
}

pagination(resPerPage){
    const currentPage = Number(this.queryStr.page) || 1;
<<<<<<< HEAD
    const skip = resPerPage * (currentPage-1);

    this.query= this.query.limit(resPerPage).skip(skip)
    return this
}

=======
    const skip = resPerPage * (currentPage -1);

    this.query = this.query.limit(resPerPage).skip(skip)
    return this
}
>>>>>>> jules
}

module.exports = APIFeatures