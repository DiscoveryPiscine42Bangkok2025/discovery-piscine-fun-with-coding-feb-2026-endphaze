#!/bin/bash

# วนลูปตามจำนวน Argument ทั้งหมดที่ส่งเข้ามา ($@)
for name in "$@"
do
    # สร้างโฟลเดอร์โดยเอา "ex" มาต่อกับตัวแปร name
    mkdir "ex$name"
done