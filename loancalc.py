#####---------This is my first ever own created program to a loan calculator. Note that I would like to use % data on the loan % instead of using
'0 - 1.0' scale. That would be much cleaner. But anyways, here is my first ever created program.-------#####

# M = L[i(1+i)n] / [(1+i)n-1]
# M = monthly payment
# L = Loan amount
# i = interest rate (for an interest rate of 5%, i = 0.05)
# n = number of payments


monthlypayment = 0  
loanamount = 0
interestrate = 0
numberofpayments = 0  
loandurationinyears = 0
loanamount = input("How much money will you borrow? ")
interestrate = input("What is the interest rate on the loan? ")
loandurationinyears = input("How many years will it take you to pay off the loan? ")
loandurationinyears = float(loandurationinyears)
loanamount = float(loanamount)
interestrate = float(interestrate)
numberofpayments = loandurationinyears*12
monthlypayment = loanamount * interestrate * (1+ interestrate) * numberofpayments / ((1 + interestrate) * numberofpayments -1)
print("Your monthly payment will be " + str(monthlypayment))
