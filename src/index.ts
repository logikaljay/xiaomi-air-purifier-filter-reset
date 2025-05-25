import crypto from 'node:crypto';
import clipboard from "copy-paste"

function getpwd(uid: string): string {
  // Remove colons if they exist
  if (uid.includes(':')) {
    uid = uid.replaceAll(':', '')
  }

  // Convert hex string to buffer
  const uidBuffer: Buffer = Buffer.from(uid, 'hex');
  
  // Create SHA1 hash
  const hash = crypto.createHash('sha1');
  hash.update(uidBuffer);
  const hashBuffer: Buffer = hash.digest();
  
  // Build password string
  let pwd: string = "";
  pwd += hashBuffer[hashBuffer[0] % 20].toString(16).toUpperCase().padStart(2, '0');
  pwd += hashBuffer[(hashBuffer[0] + 5) % 20].toString(16).toUpperCase().padStart(2, '0');
  pwd += hashBuffer[(hashBuffer[0] + 13) % 20].toString(16).toUpperCase().padStart(2, '0');
  pwd += hashBuffer[(hashBuffer[0] + 17) % 20].toString(16).toUpperCase().padStart(2, '0');
  
  return pwd;
}

// Command line usage
if (process.argv.length > 2) {
  console.log("Password:", getpwd(process.argv[2]));
  const resetCode = `1B${getpwd(process.argv[2])},3008,A20800000000`
  console.log(`Reset code: ${resetCode}`)
  clipboard.copy(resetCode, (err) => {
    if (err) {
      throw err
    }
    else {
      console.log("Reset code copied to clipboard")
    }
  })
}

export { getpwd };