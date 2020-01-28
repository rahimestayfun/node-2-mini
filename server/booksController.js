let books = [];
//books will be an object that has a id,title,author properties.
let id = 0;


read = (req,res)=>{
    res.status(200).json(books);
};
create = (req,res)=>{
    id++;
    // let newBook = {id,...req.body};
    let newBook = {id,title: req.body.title, author: req.body.author}
    
    books.push(newBook);
    res.status(200).json(books);
};
update = (req,res)=>{
    const {id}= req.params;
    let targetIndex = books.findIndex(el=>el.id === +id);

    // const bookId = req.params.id
    // let targetIndex = books.findIndex(el=>el.id === +bookId);

    const {title,author}= req.body
    books[targetIndex].title= title;
    books[targetIndex].author = author;
    res.status(200).json(books);

    //2ND WAY
    // let index = null;
    // books.forEach((el,i)=>{
    //     if(el.id === Number(req.params.id)) index = i
    // });
    // books[index]= {
    //     id: books[index].id,
    //     title: req.body.title || books[index].title,
    //     author: req.body.author || books[index].author
    // }
    // res.status(200).json(books)
};
deleteB =(req,res)=>{
    // const {id}= req.params;
    // const targetIndex = books.findIndex(el=>el.id === +id);
    // books.splice(targetIndex,1);
    // res.status(200).json(books);  

    //2ND WAY
     let index = null;
     books.forEach((el,i)=>{
         if(el.id === Number(req.params.id)) index=i;
     });
     books.splice(index,1);
     res.status(200).send(books);

}

module.exports = {
    create,
    read,
    update,
    deleteB
}

