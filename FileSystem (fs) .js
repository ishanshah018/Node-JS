var fs=require("fs");

fs.mkdirSync("node");  // Creates node directory in current folder

fs.writeFileSync("node/wwrite.txt","Hello how are you ");

fs.renameSync("node/wwrite.txt","node/write.txt"); // File name will be updated

fs.appendFileSync("node/write.txt"," I am fine !"); // Appends data in write.txt file

fs.unlinkSync("node/write.txt"); // write.txt file will be deleted from node folder

fs.rmdirSync("node");
