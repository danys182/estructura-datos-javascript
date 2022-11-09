# Estructuras de datos en Javascript

Repositorio con algunas de las estructuras de datos realizadas con Javascript con un poco de explicación y el link al repositorio con la implementación.

**Repositorios**

- [Linked List](https://github.com/danys182/estructura-datos-javascript/blob/main/js/simply-linked-list.js)

# Linked List

Son estructuras de datos lineales, un conjunto de nodos ordenados que se compone de 2 elementos fundamentales, un valor (value) y una referencia (next) al siguiente nodo. El nodo principal es el nodo inicial (head) y el nodo final la cola (tail) que al no tener un nodo que le sigue, la referencia es *null.* 

- **Value**: Dato que contendrá el nodo, string, number, boolean, etc.
- **Next**: Referencia de un nodo al siguiente nodo.
- **Head**: Referencia al primer nodo de la lista.
- **Tail**: Referencia al último nodo de la lista.
- **Pointer**: Enlace entre nodos

## Anatomía de un Linked list

La navegación siempre es hacia adelante

![https://i.ibb.co/8Xwqyvc/linked-list.jpg](https://i.ibb.co/8Xwqyvc/linked-list.jpg)

## Para manipular existen algunos métodos comunes

| Método | Acción |
| --- | --- |
| Prepend | Agregar un nodo al inicio |
| Append | Agregar un nodo al final |
| Lookup / Search | Buscar un nodo |
| Insert | Insertar un nodo en la lista |
| Delete | Borrar un nodo |