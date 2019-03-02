using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

public class UpdateCube : MonoBehaviour
{
    [SerializeField]
    private MongoConnection mongoCon;

    [SerializeField]
    private Material mate;

    // Start is called before the first frame update
    void Start()
    {
        mongoCon.GetComponent<MongoConnection>();

    }

    // Update is called once per frame
    void Update()
    {
        StartCoroutine(changeCube());
    }

    private IEnumerator changeCube()
    {
        WaitForSeconds wait = new WaitForSeconds(1.0f);
        foreach (cubeProps item in mongoCon.cubeProperties.AsQueryable<cubeProps>())
        {
            this.gameObject.transform.Rotate(item.x, item.y, item.z);
            mate.color = new Color32((byte)item.r, (byte)item.g, (byte)item.b, 255);
            yield return wait;
        }
    }
}