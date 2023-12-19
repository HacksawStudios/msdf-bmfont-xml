const binaryLookup = {
    darwin: 'msdfgen.osx',
    win32: 'msdfgen.exe',
    linux: 'msdfgen.linux'
  };

function getBinaryDir(){
    switch(process.platform) {
        case 'win32':
            return process.arch === 'x64' ? 'win64' : 'win32';
        case 'linux':
            return process.arch === 'arm64' ? 'linux_arm64' : 'linux';
        case 'darwin':
            return 'darwin';
    }
}
const binName = binaryLookup[process.platform];
const binDir = getBinaryDir();
console.log(binName, binDir, `${process.platform}_${process.arch}`);