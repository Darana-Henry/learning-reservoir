#!/bin/bash

salary=450000
tax=0
echo "salary is $salary"

if [ $salary -gt 0 ] && [ $salary -lt 250000 ]; then
    tax=$((tax + 0))
elif [ $salary -gt 250000 ] && [ $salary -lt 500000 ]; then
    tax=$((tax + (500000 - 250000) * 5 / 100))
fi

echo "tax is $tax"
