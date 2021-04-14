def divide(array):
    start = 0
    end = len(array) - 1
    print(start)
    print(end)
    for i in range(len(array)):
        if array[start] == 0:
            start += 1
        elif array[end] == 1:
            end -= 1
        else:
            array[start], array[end] = array[end], array[start]
    return array


print(divide([0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1]))
