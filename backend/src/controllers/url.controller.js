import { createUrl,findByOriginalUrl,findByShortCode,incrementClicks } from "../models/url.models.js";
import { generateShortCode } from "../utils/generateShortCode.js";
import { findUrlsByUser,delete_Url } from "../models/url.models.js";
// import Url from "../models/url.models.js";

export const latestURL = async (req,res)=>{
    try{
        console.log("REQ.USER:", req.user); 
        const userId=req.user.id;
        const { original_url  } = req.body;
        const urls=await findByOriginalUrl(original_url,userId);

        res.json({
            count:urls.length,
            urls
        });
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server error"})
    }
};

export const deleteUrl= async (req,res)=>{
    try{
        const { shortCode } = req.params;
        const urlDeletion = await delete_Url(shortCode)
        //      res.json({
        //     urlDeletion
        // });
        return res.status(200).json({message: "URL Deleted"}); 
    }catch(err){
        res.status(500).json({message: "Server error"})

    }
}

export const getMyUrls=async(req,res)=>{
    try{
        console.log("REQ.USER:", req.user); 
        const userId=req.user.id;
        const urls=await findUrlsByUser(userId);

        res.json({
            count:urls.length,
            urls
        });
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server error"})
    }
};

export const createShortUrl = async(req,res)=>{
    try{
        const { original_url  } = req.body;
        if (!original_url ){
            return res.status(400).json({message: "Original url required"});
        }
        // var user_id=1
        const user_id = req.user.id;
        const urlExists = await findByOriginalUrl (original_url,user_id);
        if (!urlExists) {            
        try{new URL (original_url);}
        catch(err){
        return res.status(404).json({message: "Not a valid URL"});
        }
        const shortCode =generateShortCode();
        const url= await createUrl(original_url,shortCode,user_id);
        res.status(201).json({
            shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}`,
            data: url
        });
        }
        else {
            const shortCode = urlExists.short_code;
            // res.status(201).json({
            // shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}`,
            // data: urlExists
        // )}
            return res.status(400).json({message: "Shortened URL exists for this URL"});
            

        
        }
    }catch(err){
        return res.status(500).json({error: err.message});
        
    }
};

export const redirectUrl =async (req,res)=>{
    try{
        const { shortCode } =req.params;
        const url=await findByShortCode(shortCode);
        
        if(!url){
            return res.status(404).json({message: "URL Not found"});
            
        }
        
        await incrementClicks(shortCode);
        res.redirect(url.original_url);
    }catch(err){
        return res.status(500).json({error: err.message});

    }
};