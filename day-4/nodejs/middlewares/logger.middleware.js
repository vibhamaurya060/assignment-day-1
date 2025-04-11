const logger=(req, res ,next)=>{
    const start=Date.now();

    res.on('finish', ()=>{
        const duration=Date.now()-start;
        const log=`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`
        console.log(log);
    });

    next();
};

module.exports=logger;