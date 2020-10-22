#!/bin/bash
# Wrapper script for TDLoad. 
#

panic() {
	echo "ERROR: $1"
	echo " "
	exit 1
}

# Get absolute path of this script
##################################
[[ ${BASH_VERSINFO[0]} -le 2 ]] && echo 'The BASH_SOURCE array variable is only available for Bash 3.0 and higher!' && exit 1

if [ "${BASH_SOURCE[0]}" != "${0}" ]; then
  echo "script ${BASH_SOURCE[0]} is running sourced ..."
  SCRIPT_PATH="$(cd $(dirname "${BASH_SOURCE[0]}"); pwd -P)"
else
  SCRIPT_PATH="$(cd $(dirname "${0}"); pwd -P)"
  echo "script ${0} is NOT running sourced, SCRIPT_PATH=$SCRIPT_PATH"
fi

TEST_UTIL_HOME="${SCRIPT_PATH}"
LIB_HOME=${TEST_UTIL_HOME}/lib
JAVA_HOME=/usr/java/jdk1.7.0_60

# Check mandatory parameters and files
######################################


if [ -z "${JAVA_HOME}" ]; then
  panic "JAVA_HOME is not set!"
fi

# setting default java arguments for input encoding
JAVA_ARGS="-Dfile.encoding=Cp1252"

# Call TDGen
######################################
# variable TDGEN_FILE=TEST makes sure, the reviewed Backend_Data.xls is taken, not the _DEV.xls
export TDGEN_FILE=TEST

CLASSPATH="${LIB_HOME}/*.jar"

COMMAND="${JAVA_HOME}/bin/java -cp ${CLASSPATH} ${JAVA_ARGS} ch.clx.testdataloader.TDLoad -fix 100000 1 -genonly MDBTEST:MDB"

echo "Starting TDGen with command line:"
echo "    ${COMMAND}"
$COMMAND
