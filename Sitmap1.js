def diff21(n):
    ##df=0 
    if(n>21):
        df=(n-21) * 2
    else:
        df=21-n
    return df

num=input()
print "diff21(", num , ")=> " ,diff21(num)
****************************************************************************
def pos_neg(a, b, negative):
    ff=True
    if(a*b<0) :
        ff=False
    if (ff==negative):
        return True
    else :
        return False
    return True
        
num1=input()
num2=input()
neg=input()

print pos_neg(num1 , num2 , neg)
*******************************************************************************  
  
def not_string(str):
  str.lower()
  if(str[0:3]=="not"):
    return str
  else :
    str="not " + str
  return str  
s=raw_input()
print not_string(s)
************************************************************************************
def sum_double(a, b):
    if(a==b):
        return (a+b)*2
    else:
        return a+b

n1=input()
n2=input()
print sum_double(n1,n2)
***************************************************************************************
def front_back(str):
    if len(str) <= 1:
        return str
    s1=str[0]
    s2=str[len(str)-1]
    str=str[1:len(str)-1]
    return s2 + str + s1

ss=raw_input()
print front_back(ss)
****************************************************************************************
def front3(str):
  return 3*str[0:3]

ss=raw_input()
print front_back(ss)
########################################################
########################################################
def string_times(str, n):
  return n*str

num=input()
ss=raw_input()
print string_times(ss, num)
****************************************************************
def front_times(str, n):
  return n*str[0:3]

s=raw_input()
num=input()
print front_times(s,num)
**************************************************************************
def array_count9(nums):
    count=0
    for i in range( len(nums)):
        if(nums[i]== 9):
            count=count+1 
    return count

##arr={10,20,9,9,9,9,9,50}
##print array_count9(arr[])
**************************************************************************
def array123(nums):
  c1=0
  c2=0
  c3=0
  for i in range(len(nums)):
    num=nums[i]
    if(num==1):
      c1=c1+1
    elif (num==2):
      c2=c2+1
    elif(num==3):
      c3=c3+1
    
  if(c1==0 or c2==0 or c3==0):
    return False
  else:
    return True
#############################################################
############################################################
def double_char(str):
  arr=[]
  for i in str :
    arr.append(i*2)
  str=''.join(arr)
  return str
print double_char('The')
print double_char('AAbb')
print double_char('Hi-There;')
**********************************************************************
def xyz_there(str):
  
  i=0
  while "xyz" in str[i:] :
    if str[i-1+str[i:].index("xyz")] != ".":
      return True
    i += str[i:].index("xyz")+2
  return False
  

************************************************************
def count_hi(str):
  count=0
  for x in range(0 , len(str)):
    if("hi" in str[x:x+2]):
      count=count+1
  return count    
  
################################################
################################################
def has22(nums):
  if(len(nums)==0):
    return False
  arr=nums[:]
  arr.append(100)
  count=1
  for x in nums :
    if (x==arr[count] and x==2 ):
      return True
    #if(count != len(nums))  
    count=count+1
  return False
*********************************************************************
def sum67(nums):
  coun=0
  sum=0
  num=False
  for x in nums :
    if x==6:
      num=True
      continue
    if(num):
      if(x!=7):
        continue
      else:
        num=False
        continue
    sum=sum+x
  return sum  
  *********************************************************************
def sum13(nums):
  sum=0
  bb=False
  if(len(nums)==0):
    return 0
  for x in nums:
    if(x==13):
      bb=True
      continue  
    if(bb):
      bb=False
      continue 
    sum=sum+x
  return sum    
##################################################
##################################################
def first_last6(nums):
  if(nums[0]==6):
    return True
  if(nums[len(nums)-1]==6):
    return True
  else:
    return False
*********************************************************************
def reverse3(nums):
  num=[]
  for i in range(len(nums)-1 , -1 , -1):
    x=nums[i]
    num.append(x)
  
  return num
*********************************************************************
def sum3(nums):
  sum=nums[0]+nums[1]+nums[2]
  return sum
*********************************************************************

def make_ends(nums):
  a=[ nums[0] , nums[len(nums)-1]]
  
  return a

*****************************************************************
def has23(nums):
  if(nums[0]==2 or nums[1]==3 or nums[0]==3 or nums[1]==2):
    return True
  else:
    return False
  
*****************************************************************
def rotate_left3(nums):
  s=nums[0]
  del nums[0]
  nums.append(s)
  return nums

*****************************************************************
def caught_speeding(speed, is_birthday):
  if(is_birthday):
    speed=speed-5
  
  if(speed <=60):
    return 0
  if(speed >60 and speed<=80):
    return 1
  else :
    return 2

*****************************************************************
def love6(a, b):
  if(a==6)  :
    return True
  if(b==6)  :
    return True
  if(a+b==6):
    return True
  if(a-b==6):
    return True
  if(b-a==6):
    return True  
  else:
    return False
  
*****************************************************************
def sorta_sum(a, b):
  sum=a+b
  if(sum>=10 and sum<=20):
    return 20
  else :
    return sum
*****************************************************************
def in1to10(n, outside_mode):
  if(n>=1 and n<=10 and outside_mode != True):
    return True
  elif(n>1 and n<10 and outside_mode != False):
    return False
  elif(outside_mode):
    return True  
  else:
    return False
*****************************************************************
def squirrel_play(temp, is_summer):
  if(temp>=60 and temp<=100 and is_summer):
    return True
  elif(temp>=60 and temp<=90):
    return True
  else :
    return False
#############################################################################
#############################################################################
def make_bricks(small, big, goal):
  r = goal
  r -= 5*min(big,goal/5)
  return r-small <= 0
*****************************************************************
def lone_sum(a, b, c):
  if(a==b and a!=c):
    return c
  if(a==c and a!=b ):
    return b
  if(c==b and c!=a ):
    return a
  if(a==b and b==c):
    return 0
  else :
    return a+b+c
  
*******************************************************************
def lucky_sum(a, b, c):
  if(a==13):
    return 0
  if(b==13):
    return a
  if(c==13):
    return a+b
  else:
    return a+b+c
**************************************************************
def no_teen_sum(a, b, c):
  return fix_teen(a)+fix_teen(b)+fix_teen(c)
def fix_teen(n):
  return n if n not in [13,14,17,18,19] else 0

  
#####################################################################
#####################################################################
def hello_name(name):
  return "Hello " + name + "!"

******************************************************************8
def first_half(str):
  return str[0:len(str)/2]
*******************************************************************
def make_abba(a, b):
  return a+b+b+a
******************************************************************
def without_end(str):
  return str[1:len(str)-1]
******************************************************************
def first_two(str):
  return str[0:2]
*****************************************************************
def combo_string(a, b):
  if(len(b)<len(a)):
    return b+a+b
  elif (len(b)>=len(a)):
    return a+b+a
