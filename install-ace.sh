#!/bin/sh -e
cd `dirname $0`
curl -L https://github.com/zefhemel/ace-builds/archive/master.tar.gz | tar xzf -
rm -rf ace
mv ace-builds-master/ace ace
rm -rf ace-builds-master
