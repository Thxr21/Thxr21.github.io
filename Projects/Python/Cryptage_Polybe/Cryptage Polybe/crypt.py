from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication,QMessageBox,QTableWidgetItem
from numpy import*

def Remplir():
    
    mCle = wind.motCle.text()
    
    if(valide(mCle) == True):
        mat = wind.tab
        remplirMat(mat,mCle)
        
    else:
        QMessageBox.critical(wind,"Erreur","Mot cle invalide")
    

def RemplirFich():
    try:
        f = open("chaine.txt","a")
    except:
        f = open("chaine.txt","w")
        
    ch = wind.chaine.text()
    
    if(verifChaine(ch) == True and ch!=""):
        f.write(ch+"\n")
    else:
        QMessageBox.critical(wind,"Erreur","Chaine invalide")
    
    f.close()

def Crypter():
    wind.affChaine.clear()
    wind.affResult.clear()
    try:
        f1 = open("chaine.txt","r")
        
    except:
        QMessageBox.critical(wind,"Erreur","Fichier 'chaine.txt' n'existe pas.")
        return False

    f2 = open("resultat.txt","w")
        
    ch=f1.readline()
    
    while(ch!=""):
        chCr = crypt(ch)
        f2.write(chCr+"\n")
        
        wind.affChaine.addItem(ch)
        wind.affResult.addItem(chCr)
        
        ch=f1.readline()
    f1.close()
    f2.close()
    
def crypt(ch):
    res = ""
    for i in range(len(ch)-1):
        equiv = trouve(ch[i],m)
        res=res+equiv
    return res

def trouve(x,m):
    if(x=="W"):
        v = "V"
    elif(x==" "):
        return " "
    else:
        v = x
    
    for i in range(5):
        for j in range(5):
            if(v==m[i,j]):
                return (str(i+1)+str(j+1))
    
def remplirMat(M,mot):

    k=0
    lett = 64
    for i in range(5):
        for j in range(5):
            
            if(k!=len(mot)):
                m[i,j] = mot[k]
                k=k+1
            else:
                lett = lett+1
                if(lett == ord("W")):
                    lett = lett+1
                
                while(mot.find(chr(lett)) != -1):
                    lett = lett+1
                m[i,j] = chr(lett)

    i=0
    j=0
    for i in range(5):
        for j in range(5):
            M.setItem(i,j,QTableWidgetItem(m[i,j]))
                    

            

def valide(ch):
    if(3<=len(ch)<=10 and ch != ""):
        i=0
        while(i<len(ch) and "A"<=ch[i]<="Z" and ch[i]!="W" and ch[i]!=" " and ch.find(ch[i]) == i):
            i=i+1
        return (i==len(ch))
    
    else:
        return False

def verifChaine(ch):
    i=0
    while(i<len(ch) and (ch[i] == " " or "A"<=ch[i]<="Z")):
        i=i+1
    return (i==len(ch))

app = QApplication([])
wind = loadUi("interface.ui")
wind.show()
global m
m = array([[str]*5]*5)
wind.btn_remp1.clicked.connect(Remplir)
wind.btn_remp2.clicked.connect(RemplirFich)
wind.btn_crypt.clicked.connect(Crypter)
app.exec_()