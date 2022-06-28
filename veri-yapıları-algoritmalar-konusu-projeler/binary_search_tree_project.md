# Veri Yapıları ve Algoritmalar

## Binary Search Tree Projesi

### Project 3

**Soru ve Cevap**

**[7,5,1,8,3,6,0,9,4,2]** dizisinin Binary-Search-Tree aşamalarını yazınız.

**Örnek:** root x'dir. root'un sağında y bulunur. Solunda z bulunur vb.

root = 7

5 < 7  olduğu için root'un solunda bulunur.

            7
          /
        5

1 < 7 olduğu için root'un solunda ve 1 < 5 olduğu için 5'inde solunda bulunur.

            7
          /
        5
      /
    1

8 > 7 olduğu için root'un sağında bulunur.

            7
          /  \
        5     8
      /
    1

3 < 7 olduğu için root'un solunda, 5 < 3 olduğu için 5'in solunda, ama 3 > 1 olduğu için 1'in sağında bulunur.

            7
          /  \
        5     8
      /
    1
      \
        3

6 < 7 olduğu için root'un solunda, 6 > 5 olduğu için 5'in sağında bulunur.

            7
          /  \
        5     8
      /   \
    1      6
      \
        3

0 < 7 olduğu için root'un solunda, 0 < 5 olduğu için 5'in solunda, 0 < 1 olduğu için 1'in solunda bulunur.

                7
              /  \
            5     8
          /   \
        1      6
      /   \
    0      3

9 > 7 olduğu için root'un sağında, 9 > 8 olduğu için 8'in sağında bulunur.

                7
              /  \
            5     8
          /   \     \
        1      6      9
      /   \
    0      3

4 < 7 olduğu için root'un solunda, 4 < 5 olduğu için 5'in solunda, 4 > 1 olduğu için 1'in sağında, 4 > 3 olduğu için 3'ün sağında bulunur.

                7
              /  \
            5     8
          /   \     \
        1      6      9
      /   \
    0      3
            \
             4

2 < 7 olduğu için root'un solunda, 2 < 5 olduğu için 5'in solunda, 2 > 1 olduğu için 1'in sağında, 2 < 3 olduğu için 3'ün solunda bulunur.

                7
              /  \
            5     8
          /   \     \
        1      6      9
      /   \
    0      3
         /   \
        2     4