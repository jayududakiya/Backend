const os = require('os')

// * The operating system-specific end-of-line marker.\r\n
// ? console.log(os.EOL);


// * Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.
//? console.log(os.arch()); 
// * windows bit : x64

// * Returns an estimate of the default amount of parallelism a program should use. Always returns a value greater than zero.
//? console.log(os.availableParallelism());


// * Contains commonly used operating system-specific constants for error codes, process signals, and so on. The specific constants defined are described in OS constants.
// ? console.log(os.constants);


// * Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.
// ? console.log(os.cpus());


//* The platform-specific file path of the null device.
//* \\.\nul on Windows 
//* /dev/null on POSIX
//?  console.log(os.devNull);


// *Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
// * Possible values are 'BE' for big endian and 'LE' for little endian.
//? console.log(os.endianness());


// * Returns the amount of free system memory in bytes as an integer.
//? console.log(os.freemem());

// * Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned.
//? console.log(os.getPriority());


//* Returns the string path of the current user's home directory
//? console.log(os.homedir());

//* Returns the host name of the operating system as a string.
// ? console.log(os.hostname());

/* 
* Returns an array containing the 1, 5, and 15 minute load averages.
* The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.
*  The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
*/
//? console.log(os.loadavg());

/*
*Returns the machine type as a string, such as arm, arm64, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64.

*On POSIX systems, the machine type is determined by calling uname(3). On Windows, RtlGetVersion() is used, and if it is not available, GetVersionExW() will be used. See
*/
//? console.log(os.machine())


/*
* Returns an object containing network interfaces that have been assigned a network address.

* Each key on the returned object identifies a network interface. The associated value is an array of objects that each describe an assigned network address.

* The properties available on the assigned network address object include:
*/ 
//? console.log(os.networkInterfaces());



// * Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
//? console.log(os.platform());


//* On POSIX systems, the operating system release is determined by calling uname(3). On Windows, GetVersionExW() is used. See https://en.wikipedia.org/wiki/Uname#Examples for more information.
//? console.log(os.release());


//* Returns the operating system's default directory for temporary files as a string.
//? console.log(os.tmpdir());

// * Returns the total amount of system memory in bytes as an integer.
//? console.log(os.totalmem());


//* Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
//? console.log(os.type());

//* Returns the system uptime in number of seconds.
//? console.log(os.uptime());

// * it's returns current user information as object 
//?console.log(os.userInfo());

// * Returns a string identifying the kernel version.
//? console.log(os.version());

