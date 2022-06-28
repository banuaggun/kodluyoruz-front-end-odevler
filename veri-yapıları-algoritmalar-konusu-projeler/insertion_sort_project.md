# Veri Yapıları ve Algoritmalar

## Insertion Sort Projesi

### Project 1


**Sorular ve Cevaplar**

**[22,27,16,2,18,6]** --> Insertion Sort

1. Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.

[2,27,16,22,18,6]

[2,6,16,22,18,27]

[2,6,16,22,18,27]

[2,6,16,18,22,27]

2. Big-O gösterimini yazınız.

n+(n-1)+(n-2)+...+1 = [n.(n+1)]/2 = ((n^2) + n)/2 => O(n^2)

3. Time Complexity:

Average case: Aradığımız sayının ortada olması => O(n^2)

Worst case: Aradığımız sayının sonda olması => O(n^2)

Best case: Aradığımız sayının dizinin en başında olması => O(n)

4. Dizi sıralandıktan sonra 18 sayısıs hangi case kapsaamına girer? Yazınız.

18 => Average Case

**[7,3,5,8,2,9,4,15,6]** dizsinin insertion sort'a göre ilk 4 adımını yazınız.

[2,3,5,8,7,9,4,15,6]

[2,3,5,8,7,9,4,15,6]

[2,3,4,8,7,9,5,15,6]

[2,3,4,5,7,9,8,15,6]