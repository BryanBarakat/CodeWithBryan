
def is_improving(person,day):
    
    if(person.is_working_hard in day):
        return True
    else:
        return False
    
    
def is_succeeding(person):
    score = 0
    lifetime = 28835
    
    for day in range(lifetime):
        if(is_improving(person,day)):
            score += 1
        else:
            score -= 1
    
    return True if score > 0 else False
    

print(is_succeeding("me"))



























